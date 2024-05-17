import { Root, FooterLogo, FooterLinks, Link, Text } from './styled';
import whiteLogo from '../../assets/icons/logo-white.svg';

export const Footer = () => {
	return (
		<Root>
			<FooterLogo>
				<img width={265} height={86} src={whiteLogo} alt="logo" />
			</FooterLogo>

			<FooterLinks>
				<Link to="/">Главная</Link>
				<Link to="/animals">Животные</Link>
				<Link to="/shelters">Приюты</Link>
			</FooterLinks>

			<Text>&copy;2024 Хвост - онлайн-сервис по подбору домашних животных из приютов</Text>
		</Root>
	);
}