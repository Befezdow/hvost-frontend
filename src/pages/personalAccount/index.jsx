import { useState } from "react";
import { Pagination } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Root,
  HeaderWrapper,
  AddModal,
  DeleteModal,
  WarningMessage,
  Table,
  NavLink,
  Text,
  Button,
} from "./styled";

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

const getColumns = (showDeleteModal) => [
  {
    title: "Кличка",
    dataIndex: "name",
    key: "name",
    render: (text) => <NavLink>{text}</NavLink>,
  },
  {
    title: "Пол",
    dataIndex: "gender",
    key: "gender",
    render: (text) => <Text>{text}</Text>,
  },
  {
    title: "Вид",
    dataIndex: "species",
    key: "species",
    render: (text) => <Text>{text}</Text>,
  },
  {
    title: "Возраст",
    dataIndex: "age",
    key: "age",
    render: (text) => <Text>{text}</Text>,
  },
  {
    title: "Порода",
    dataIndex: "breed",
    key: "breed",
    render: (text) => <Text>{text}</Text>,
  },
  {
    title: "Окрас",
    dataIndex: "color",
    key: "color",
    render: (text) => <Text>{text}</Text>,
  },
  {
    title: "Размер",
    dataIndex: "size",
    key: "size",
    render: (text) => <Text>{text}</Text>,
  },
  {
    title: "Действие",
    key: "action",
    render: () => (
      <Button onClick={showDeleteModal}>
        <DeleteOutlined />
        Удалить
      </Button>
    ),
  },
];

export const PersonalAccount = () => {
  // modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const showAddModal = () => {
    setIsAddModalOpen(true);
  };
  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleAdd = () => {
    setIsAddModalOpen(false);
  };
  const handleDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCancelAdding = () => {
    setIsAddModalOpen(false);
  };
  const handleCancelDeleting = () => {
    setIsDeleteModalOpen(false);
  };

  const columns = getColumns(showDeleteModal);

  return (
    <Root>
      <DeleteModal
        title="Вы действительно хотите удалить информацию о животном?"
        cancelText="Отменить"
        okText="Удалить"
        open={isDeleteModalOpen}
        onOk={handleDelete}
        onCancel={handleCancelDeleting}
      >
        <WarningMessage>
          После нажатия кнопки &quot;Удалить&quot; информация о животном будет
          безвозвратно утеряна, а его карточка исчезнет из общего каталога.
        </WarningMessage>
      </DeleteModal>

      <HeaderWrapper>
        <div>Активные публикации</div>
        <Button onClick={showAddModal}>
          <PlusOutlined />
          Добавить
        </Button>
        <AddModal
          title="Добавить информацию о животном"
          cancelText="Отменить"
          okText="Добавить"
          open={isAddModalOpen}
          onOk={handleAdd}
          onCancel={handleCancelAdding}
        >
          <p>
            Здесь должны быть всякие штуки для добавления новой карточки
            животного
          </p>
        </AddModal>
      </HeaderWrapper>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Pagination defaultCurrent={1} total={50} />
    </Root>
  );
};
