import { useState, useEffect, useMemo } from "react";
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

const PAGE_SIZE = 20;
const INITIAL_DATA = { list: [], totalAmount: 0 };

async function fetchData(setIsLoading, currentPage, profileId) {
  const offset = PAGE_SIZE * (currentPage - 1);
  const limit = PAGE_SIZE;

  setIsLoading(true);
  let result;
  try {
    result = await getAnimalList(offset, limit, profileId);
  } catch (error) {
    // TODO: show error
    console.log(error);
  }
  setIsLoading(false);
  return result;
}

export const AnimalsTable = () => {
  const profileData = useProfileData();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [animalIdToDelete, setAnimalIdToDelete] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  const loadData = (page, profileId) => {
    fetchData(setIsLoading, page, profileId).then((result) => setData(result));
  };

  useEffect(() => {
    loadData(currentPage, profileData.id);
  }, [currentPage, profileData]);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openDeleteModal = (id) => {
    setAnimalIdToDelete(id);
  };
  const closeDeleteModal = () => {
    setAnimalIdToDelete(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddFinish = () => {
    loadData(currentPage, profileData.id);
    closeAddModal();
  };

  const handleDeleteFinish = () => {
    loadData(currentPage, profileData.id);
    closeDeleteModal();
  };

  const dataSource = useMemo(
    () => (data?.list ?? []).map((elem) => ({ key: elem.id, ...elem })),
    [data]
  );
  const columns = getColumns(openDeleteModal);
  const tableLayout =
    data.list.length === 0 ? (
      <EmptyData message="Список животных пуст :(" />
    ) : (
      <Table columns={columns} dataSource={dataSource} pagination={false} />
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
        onFinish={handleAddFinish}
        onClose={closeAddModal}
      />
      <DeleteAnimalModal
        animalId={animalIdToDelete}
        onFinish={handleDeleteFinish}
        onClose={closeDeleteModal}
      />
    </Root>
  );
};
