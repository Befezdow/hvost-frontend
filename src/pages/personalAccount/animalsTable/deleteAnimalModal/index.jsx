import { Modal } from "antd";
import { WarningMessage } from "./styled";

export const DeleteAnimalModal = ({ isOpen, onSubmit, onCancel }) => {
  return (
    <Modal
      title="Вы действительно хотите удалить информацию о животном?"
      cancelText="Отменить"
      okText="Удалить"
      open={isOpen}
      onOk={onSubmit}
      onCancel={onCancel}
    >
      <WarningMessage>
        После нажатия кнопки &quot;Удалить&quot; информация о животном будет
        безвозвратно утеряна, а его карточка исчезнет из общего каталога.
      </WarningMessage>
    </Modal>
  );
};
