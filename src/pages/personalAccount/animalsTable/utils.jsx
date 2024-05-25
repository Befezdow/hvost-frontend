import { Dropdown, Button } from "antd";
import { MoreOutlined, DeleteOutlined } from "@ant-design/icons";
import { mapGender, mapSpecies, mapAge, mapSize } from "../../../utils";
import { NavLink, Text, ActionsElement } from "./styled";

const getActions = (onDelete) => [
  {
    key: "delete",
    label: (
      <ActionsElement onClick={() => onDelete()}>
        <DeleteOutlined />
        Удалить
      </ActionsElement>
    ),
  },
];

export const getColumns = (showDeleteModal) => [
  {
    title: "Кличка",
    key: "name",
    render: (_, record) => (
      <NavLink to={`/animals/${record.id}`}>{record.nickname}</NavLink>
    ),
  },
  {
    title: "Пол",
    dataIndex: "gender",
    key: "gender",
    render: (value) => <Text>{mapGender(value)}</Text>,
  },
  {
    title: "Вид",
    dataIndex: "species",
    key: "species",
    render: (value) => <Text>{mapSpecies(value)}</Text>,
  },
  {
    title: "Возраст",
    key: "age",
    render: (_, record) => (
      <Text>{mapAge(record.minBirthDate, record.maxBirthDate)}</Text>
    ),
  },
  {
    title: "Порода",
    dataIndex: "breed",
    key: "breed",
    render: (value) => <Text>{value}</Text>,
  },
  {
    title: "Окрас",
    dataIndex: "color",
    key: "color",
    render: (value) => <Text>{value}</Text>,
  },
  {
    title: "Размер",
    dataIndex: "size",
    key: "size",
    render: (value) => <Text>{mapSize(value)}</Text>,
  },
  {
    title: "Действие",
    key: "action",
    render: (_, record) => (
      <Dropdown
        menu={{
          items: getActions(() => showDeleteModal(record.id)),
        }}
        trigger={["click"]}
        arrow
      >
        <Button icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];
