import { useState, useEffect } from "react";
import { Pagination, Button, Table, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Loadable } from "../../../components/loadable";
import { EmptyData } from "../../../components/emptyData";
import { getAnimalList } from "../../../services/animals";
import { useProfileData } from "../../../services/auth";
import { AddAnimalModal } from "./addAnimalModal";
import { DeleteAnimalModal } from "./deleteAnimalModal";
import { getColumns } from "./utils";
import { Root, HeaderWrapper } from "./styled";

const data = [
  {
    key: "1",
    name: "Барсик",
    gender: "Мальчик",
    species: "Кот",
    age: "4 года",
    breed: "Без породы",
    color: "Полосатый",
    size: "Средний",
  },
  {
    key: "2",
    name: "Луна",
    gender: "Девочка",
    species: "Собака",
    age: "3 года",
    breed: "Без породы",
    color: "Белый",
    size: "Средний",
  },
  {
    key: "3",
    name: "Киси-Миси",
    gender: "Девочка",
    species: "Кот",
    age: "5 лет",
    breed: "Сиамская",
    color: "Бежевый",
    size: "Средний",
  },
];

const PAGE_SIZE = 20;
const INITIAL_DATA = { list: [], totalAmount: 0 };

export const AnimalsTable = () => {
  const profileData = useProfileData();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  useEffect(() => {
    async function fetchData() {
      const offset = PAGE_SIZE * (currentPage - 1);
      const limit = PAGE_SIZE;

      setIsLoading(true);
      try {
        const result = await getAnimalList(offset, limit, profileData.id);
        setData(result);
      } catch (error) {
        // TODO: show error
        console.log(error);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [currentPage, profileData]);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openDeleteModal = (id) => {
    console.log(id);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleAdd = (data) => {
    console.log(data);
    setIsAddModalOpen(false);
  };
  const handleDelete = (data) => {
    console.log(data);
    setIsDeleteModalOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const columns = getColumns(openDeleteModal);
  const tableLayout =
    data.list.length === 0 ? (
      <EmptyData message="Список животных пуст :(" />
    ) : (
      <Table columns={columns} dataSource={data.list} pagination={false} />
    );

  return (
    <Root>
      <HeaderWrapper>
        <Typography.Title level={3}>Активные профили животных</Typography.Title>
        <Button onClick={openAddModal} icon={<PlusOutlined />}>
          Добавить
        </Button>
      </HeaderWrapper>

      <Loadable isLoading={isLoading}>{tableLayout}</Loadable>
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        pageSize={PAGE_SIZE}
        total={data.totalAmount}
        disabled={isLoading}
      />

      <AddAnimalModal
        isOpen={isAddModalOpen}
        onSubmit={handleAdd}
        onCancel={closeAddModal}
      />
      <DeleteAnimalModal
        isOpen={isDeleteModalOpen}
        onSubmit={handleDelete}
        onCancel={closeDeleteModal}
      />
    </Root>
  );
};
