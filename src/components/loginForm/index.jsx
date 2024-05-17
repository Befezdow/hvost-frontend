import { Root, Header, LoginDisclaimer, Form, InputField, Button } from "./styled";

export const LoginForm = () => {
	return (
		<Root>
			<Header>Войти</Header>
			<LoginDisclaimer>Внимание! Авторизация на сайте доступна только для зарегистрированных организаций. Если вы являетесь представителем организации для помощи животным и хотите зарегистрироваться - отправьте заявку на почтовый адрес mariya161617@yandex.ru. </LoginDisclaimer>
			<Form action="/login" method="post">
				<InputField type="email" placeholder="Логин" required />
				<InputField type="password" placeholder="Пароль" required />
				<Button type="submit">Войти</Button>
			</Form>
		</Root>
	);
};