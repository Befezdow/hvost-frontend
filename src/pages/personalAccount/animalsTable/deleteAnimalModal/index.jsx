import { useState } from "react";
import { Modal, Button } from "antd";
import { deleteAnimal } from "../../../../services/animals";
import { WarningMessage, SubmitButton } from "./styled";

export const DeleteAnimalModal = ({ animalId, onFinish, onClose }) => {
  const [isPending, setIsPending] = useState(false);

  const handleDelete = async () => {
    setIsPending(true);
    try {
      await deleteAnimal(animalId);
      onFinish();
    } catch (error) {
      // TODO: show error
      console.log(error);
    }
    setIsPending(false);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      title="Вы действительно хотите удалить информацию о животном?"
      open={animalId != null}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          Отменить
        </Button>,
        <SubmitButton key="submit" onClick={handleDelete} disabled={isPending}>
          Удалить
        </SubmitButton>,
      ]}
    >
      <WarningMessage>
        После нажатия кнопки &quot;Удалить&quot; информация о животном будет
        безвозвратно утеряна, а его карточка исчезнет из общего каталога.
      </WarningMessage>
    </Modal>
  );
};
