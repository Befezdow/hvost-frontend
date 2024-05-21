import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { getAnimalList } from "../../services/animals";
import { AnimalCard } from "../../components/animalCard";
import { Loadable } from "../../components/loadable";
import { EmptyData } from "../../components/emptyData";
import { CardsWrapper, Root } from "./styled";

const PAGE_SIZE = 20;
const INITIAL_DATA = { list: [], totalAmount: 0 };

export const AnimalList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  useEffect(() => {
    async function fetchData() {
      const offset = PAGE_SIZE * (currentPage - 1);
      const limit = PAGE_SIZE;

      setIsLoading(true);
      try {
        const result = await getAnimalList(offset, limit);
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
      <EmptyData message="Список животных пуст :(" />
    ) : (
      <CardsWrapper>
        {data.list.map((elem) => (
          <AnimalCard
            key={elem.id}
            id={elem.id}
            nickname={elem.nickname}
            photos={elem.photos}
            gender={elem.gender}
            minBirthDate={elem.minBirthDate}
            maxBirthDate={elem.maxBirthDate}
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
