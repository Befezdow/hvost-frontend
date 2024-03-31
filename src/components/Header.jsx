import logo from '../assets/logo-name.svg';

export const Header = () => {
	return (
		<header>
			<img src={logo} alt="logo" />
			<nav>
				<ul>
					<li><a href="">Главная</a></li>
					<li><a href="">Животные</a></li>
					<li><a href="">Приюты</a></li>
					<li><a href="">Помочь</a></li>
				</ul>
			</nav>
			<h2>Hello, users!</h2>
		</header>
	)
}