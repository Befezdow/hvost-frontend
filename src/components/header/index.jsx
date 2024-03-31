import logo from '../../assets/logo.svg';

export const Header = () => {
	return (
		<header>
			<img width={265} height={86} src={logo} alt="logo" />
			<nav>
				<ul>
					<li><a href="/">Главная</a></li>
					<li><a href="/animals">Животные</a></li>
					<li><a href="#">Приюты</a></li>
					<li><a href="#">Помочь</a></li>
				</ul>
			</nav>
		</header>
	)
}