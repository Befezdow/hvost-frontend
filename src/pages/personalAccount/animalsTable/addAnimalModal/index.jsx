import { useState } from "react";
import { Input, Select, DatePicker, Modal, Form, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ImageUploader } from "../../../../components/imageUploader";
import { createAnimal } from "../../../../services/animals";
import { FieldName, AddAnimalForm, SubmitButton } from "./styled";

const readFileAsBase64 = async (file) => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      res(reader.result);
    };
    reader.onerror = (error) => {
      rej(error);
    };
  });
};

export const AddAnimalModal = ({ isOpen, onFinish, onClose }) => {
  const [form] = Form.useForm();
  const [isPending, setIsPending] = useState(false);

  const handleAdd = async (data) => {
    const photos = [];
    for (const elem of data.photos) {
      const base64Data = await readFileAsBase64(elem.originFileObj);
      const [mime, data] = base64Data.replace("data:", "").split(";base64,");
      photos.push({ mime, data });
    }

    const animal = {
      nickname: data.nickname,
      gender: data.gender,
      species: data.species,
      minBirthDate: new Date(data.birthDates[0]).toISOString(),
      maxBirthDate: new Date(data.birthDates[1]).toISOString(),
      breed: data.breed,
      color: data.color,
      size: data.size,
      description: data.description,
      photos,
    };

    setIsPending(true);
    try {
      await createAnimal(animal);
      form.resetFields();
      onFinish();
    } catch (error) {
      // TODO: show error
      console.log(error);
    }
    setIsPending(false);
  };

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Добавить информацию о животном"
      open={isOpen}
      onCancel={handleClose}
      footer={[
        <Button key="cancel" onClick={() => handleClose()}>
          Отменить
        </Button>,
        <SubmitButton
          key="submit"
          htmlType="submit"
          onClick={() => form.submit()}
          disabled={isPending}
        >
          Добавить
        </SubmitButton>,
      ]}
    >
      <AddAnimalForm form={form} onFinish={handleAdd}>
        <div>
          <FieldName>
            Фото (вы можете добавить до 5 фотографий животного):
          </FieldName>
          <Form.Item name="photos" getValueFromEvent={(e) => e.fileList}>
            <ImageUploader listType="picture-card" maxCount={5}>
              <UploadOutlined />
            </ImageUploader>
          </Form.Item>
        </div>

        <div>
          <FieldName>Кличка:</FieldName>
          <Form.Item
            name="nickname"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <Input type="text" placeholder="Укажите имя животного" />
          </Form.Item>
        </div>

        <div>
          <FieldName>Вид животного:</FieldName>
          <Form.Item
            name="species"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <Select
              placeholder="Выберите вид животного"
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
          </Form.Item>
        </div>

        <div>
          <FieldName>Пол животного:</FieldName>
          <Form.Item
            name="gender"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <Select
              placeholder="Выберите пол животного"
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
          </Form.Item>
        </div>

        <div>
          <FieldName>Приблизительная дата рождения:</FieldName>
          <Form.Item
            name="birthDates"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <DatePicker.RangePicker
              placeholder={["Первая дата", "Вторая дата"]}
            />
          </Form.Item>
        </div>

        <div>
          <FieldName>Порода:</FieldName>
          <Form.Item
            name="breed"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <Input type="text" placeholder="Порода / без породы" />
          </Form.Item>
        </div>

        <div>
          <FieldName>Окрас:</FieldName>
          <Form.Item
            name="color"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <Input type="text" placeholder="Цвет / окрас животного" />
          </Form.Item>
        </div>

        <div>
          <FieldName>Размер:</FieldName>
          <Form.Item
            name="size"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <Select
              placeholder="Выберите размер"
              options={[
                {
                  value: "SMALL",
                  label: "Маленький",
                },
                {
                  value: "MEDIUM",
                  label: "Средний",
                },
                {
                  value: "LARGE",
                  label: "Большой",
                },
              ]}
            />
          </Form.Item>
        </div>

        <div>
          <FieldName>Подробная информация:</FieldName>
          <Form.Item
            name="description"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Здесь вы можете указать подробные сведения о животном - особенности здоровья, характер, привычки и др."
              maxLength={800}
            />
          </Form.Item>
        </div>
      </AddAnimalForm>
    </Modal>
  );
};
