import logo from '../../assets/icons/logo.svg';
import {Root, Navigation, NavLink} from './styled';

export const Header = () => {
	return (
		<Root>
			<img width={265} height={86} src={logo} alt="logo" />
			<Navigation>
				<NavLink to="/">Главная</NavLink>
				<NavLink to="/animals">Животные</NavLink>
				<NavLink to="/shelters">Приюты</NavLink>
				<NavLink to="/login">Войти</NavLink>
			</Navigation>
		</Root>
	);
}