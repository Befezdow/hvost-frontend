import { Root, AnimalImage, AnimalInfo, AnimalName, AnimalGender, AnimalAge } from './styled';

export const AnimalCard = () => {
	return (
		<Root to="/animals/1">
				<AnimalImage>
					<img width={225} src={"https://images.unsplash.com/photo-1615349491492-d16377c236a4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Animal photo' />
				</AnimalImage>
				<AnimalInfo>
					<AnimalName>Барсик</AnimalName>
					<AnimalAge>4 года</AnimalAge>
					<AnimalGender>Мальчик</AnimalGender>
				</AnimalInfo>
		</Root>
	);
}