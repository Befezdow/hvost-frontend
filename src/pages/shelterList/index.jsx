import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { getShelterList } from "../../services/shelters";
import { ShelterCard } from "../../components/shelterCard";
import { Loadable } from "../../components/loadable";
import { EmptyData } from "../../components/emptyData";
import { Root, CardsWrapper } from "./styled";

const PAGE_SIZE = 10;
const INITIAL_DATA = { list: [], totalAmount: 0 };

export const ShelterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  useEffect(() => {
    async function fetchData() {
      const offset = PAGE_SIZE * (currentPage - 1);
      const limit = PAGE_SIZE;

      setIsLoading(true);
      try {
        const result = await getShelterList(offset, limit);
        setData(result);
      } catch (error) {
        // TODO: show error
        console.log(error);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const cardsLayout =
    data.list.length === 0 ? (
      <EmptyData message="Список приютов пуст :(" />
    ) : (
      <CardsWrapper>
        {data.list.map((elem) => (
          <ShelterCard
            key={elem.id}
            id={elem.id}
            name={elem.name}
            address={elem.address}
            phoneNumber={elem.phoneNumber}
            photos={elem.photos}
          />
        ))}
      </CardsWrapper>
    );

  return (
    <Root>
      <Loadable isLoading={isLoading}>{cardsLayout}</Loadable>

      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        pageSize={PAGE_SIZE}
        total={data.totalAmount}
        disabled={isLoading}
      />
    </Root>
  );
};
