import { Root, ShelterImage, ShelterInfo, ShelterName, ShelterAddress, Text, ShelterDescription } from "./styled";

export const ShelterCard = () => {
	return (
		<Root to="/shelters/1">
			<ShelterImage>
				<img height={200} src="https://dynamic.brandcrowd.com/asset/logo/714ca687-103d-4d63-99ae-10512f983d60/insta-square?logoTemplateVersion=1&v=638321033099730000"/>
			</ShelterImage>
			<ShelterInfo>
				<ShelterName>Маленькое счастье</ShelterName>
				<Text>Адрес</Text>
				<ShelterAddress>пос. Дружба, ул. Солнечная, д. 34а</ShelterAddress>
				<Text>Деятельность</Text>
				<ShelterDescription>Приют для кошек и собак</ShelterDescription>
			</ShelterInfo>
		</Root>
	);
};