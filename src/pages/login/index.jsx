import { useEffect } from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/auth";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (AuthService.isAuthorized) {
      navigate("/personalAccount");
    }
  }, [navigate]);

  const onSubmit = async (values) => {
    const { login, password } = values;
    await AuthService.authorize(login, password);

    navigate("/personalAccount");
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
            <InputField type="text" placeholder="Логин" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Обязательное поле" }]}
          >
            <InputField type="password" placeholder="Пароль" />
          </Form.Item>
          <Form.Item>
            <SubmitButton block htmlType="submit">
              Войти
            </SubmitButton>
          </Form.Item>
        </LoginForm>
      </LoginCard>
    </Root>
  );
};
