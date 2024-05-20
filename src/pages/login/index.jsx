import { Form } from "antd";
import {
  Root,
  LoginCard,
  Header,
  LoginDisclaimer,
  LoginForm,
  InputField,
  SubmitButton,
} from "./styled";

export const LoginPage = () => {
  const onSubmit = (values) => {
    console.log("Success:", values);
  };

  return (
    <Root>
      <LoginCard>
        <Header>Войти</Header>
        <LoginDisclaimer>
          Внимание! Авторизация на сайте доступна только для зарегистрированных
          организаций. Если вы являетесь представителем организации для помощи
          животным и хотите зарегистрироваться - отправьте заявку на почтовый
          адрес mariya161617@yandex.ru.
        </LoginDisclaimer>
        <LoginForm onFinish={onSubmit}>
          <Form.Item
            name="login"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <InputField type="email" placeholder="Логин" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <InputField type="password" placeholder="Пароль" />
          </Form.Item>
          <Form.Item>
            <SubmitButton block htmlType="submit">Войти</SubmitButton>
          </Form.Item>
        </LoginForm>
      </LoginCard>
    </Root>
  );
};
