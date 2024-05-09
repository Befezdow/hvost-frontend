import logo from '../../assets/icons/logo.svg';
import {Root, Navigation, NavLink} from './styled';

export const Header = () => {
	return (
		<Root>
			<img width={265} height={86} src={logo} alt="logo" />
			<Navigation>
				<NavLink to="/">Главная</NavLink>
				<NavLink to="/animals">Животные</NavLink>
				<NavLink to="#">Приюты</NavLink>
				{/* <NavLink to="#">Помочь</NavLink> */}
			</Navigation>
		</Root>
	);
}