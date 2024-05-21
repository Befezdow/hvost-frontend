import { useState } from "react";
import { 
	Pagination, 
	Upload, 
	Input,
	Select,
	DatePicker } from "antd";
import ImgCrop from "antd-img-crop";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Root,
  HeaderWrapper,
  AddModal,
	DescriptionText,
	Row,
	FieldName,
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

const { TextArea } = Input;

const { RangePicker } = DatePicker;

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

	const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

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
        <div>Активные профили животных</div>
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
          <DescriptionText>
            Вы можете добавить до 5 фотографий животного:
          </DescriptionText>
					<ImgCrop rotationSlider>
						<Upload
							action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
							listType="picture-card"
							fileList={fileList}
							onChange={onChange}
							onPreview={onPreview}
						>
							{fileList.length < 5 && '+ Загрузить'}
						</Upload>
					</ImgCrop>
					<Row>
						<FieldName>Кличка:</FieldName>
						<Input placeholder="Укажите имя животного"/>
					</Row>
					<Row>
						<FieldName>Вид животного:</FieldName>
						<Select
							placeholder="Выберите вид животного"
							style={{
								width: 267
							}}
							options={[
								{
									value: 'CAT',
									label: 'Кот',
								},
								{
									value: 'DOG',
									label: 'Собака',
								},
							]}
						/>
					</Row>
					<Row>
						<FieldName>Пол:</FieldName>
						<Select
							placeholder="Выберите пол животного"
							style={{
								width: 267
							}}
							options={[
								{
									value: 'BOY',
									label: 'Мальчик',
								},
								{
									value: 'GIRL',
									label: 'Девочка',
								},
							]}
						/>
					</Row>
					<Row>
						<FieldName>Приблизительная дата рождения:</FieldName>
						<RangePicker placeholder={['Первая дата', 'Вторая дата']}/>
					</Row>
					<Row>
						<FieldName>Порода:</FieldName>
						<Input placeholder="Без породы / Есть порода"/>
					</Row>
					<Row>
						<FieldName>Окрас:</FieldName>
						<Input placeholder="Цвет животного"/>
					</Row>
					<Row>
						<FieldName>Размер:</FieldName>
						<Select
							placeholder="Выберите размер"
							style={{
								width: 267
							}}
							options={[
								{
									value: 'LITTLE',
									label: 'Маленький',
								},
								{
									value: 'MIDDLE',
									label: 'Средний',
								},
								{
									value: 'BIG',
									label: 'Большой',
								},
							]}
						/>
					</Row>
					<DescriptionText>
            Подробная информация:
          </DescriptionText>
					<TextArea rows={4} placeholder="Здесь вы можете указать подробные сведения о животном - особенности здоровья, характер, привычки и др." maxLength={6} />
        </AddModal>
      </HeaderWrapper>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Pagination defaultCurrent={1} total={50} />
    </Root>
  );
};
