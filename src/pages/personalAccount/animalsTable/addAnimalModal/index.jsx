import { useState } from "react";
import { Upload, Input, Select, DatePicker, Modal } from "antd";
import ImgCrop from "antd-img-crop";
import { DescriptionText, Row, FieldName } from "./styled";

export const AddAnimalModal = ({ isOpen, onSubmit, onCancel }) => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onImagePreview = async (file) => {
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
    <Modal
      title="Добавить информацию о животном"
      cancelText="Отменить"
      okText="Добавить"
      open={isOpen}
      onOk={onSubmit}
      onCancel={onCancel}
    >
      <DescriptionText>
        Вы можете добавить до 5 фотографий животного:
      </DescriptionText>
      <ImgCrop rotationSlider>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onChange={({ fileList }) => setFileList(fileList)}
          onPreview={onImagePreview}
        >
          {fileList.length < 5 && "+ Загрузить"}
        </Upload>
      </ImgCrop>
      <Row>
        <FieldName>Кличка:</FieldName>
        <Input placeholder="Укажите имя животного" />
      </Row>
      <Row>
        <FieldName>Вид животного:</FieldName>
        <Select
          placeholder="Выберите вид животного"
          style={{
            width: 267,
          }}
          options={[
            {
              value: "CAT",
              label: "Кот",
            },
            {
              value: "DOG",
              label: "Собака",
            },
          ]}
        />
      </Row>
      <Row>
        <FieldName>Пол:</FieldName>
        <Select
          placeholder="Выберите пол животного"
          style={{
            width: 267,
          }}
          options={[
            {
              value: "BOY",
              label: "Мальчик",
            },
            {
              value: "GIRL",
              label: "Девочка",
            },
          ]}
        />
      </Row>
      <Row>
        <FieldName>Приблизительная дата рождения:</FieldName>
        <DatePicker.RangePicker placeholder={["Первая дата", "Вторая дата"]} />
      </Row>
      <Row>
        <FieldName>Порода:</FieldName>
        <Input placeholder="Без породы / Есть порода" />
      </Row>
      <Row>
        <FieldName>Окрас:</FieldName>
        <Input placeholder="Цвет животного" />
      </Row>
      <Row>
        <FieldName>Размер:</FieldName>
        <Select
          placeholder="Выберите размер"
          style={{
            width: 267,
          }}
          options={[
            {
              value: "LITTLE",
              label: "Маленький",
            },
            {
              value: "MIDDLE",
              label: "Средний",
            },
            {
              value: "BIG",
              label: "Большой",
            },
          ]}
        />
      </Row>
      <DescriptionText>Подробная информация:</DescriptionText>
      <Input.TextArea
        rows={4}
        placeholder="Здесь вы можете указать подробные сведения о животном - особенности здоровья, характер, привычки и др."
        maxLength={6}
      />
    </Modal>
  );
};
