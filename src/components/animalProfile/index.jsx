import { Root,
	AnimalInfo, 
	AnimalImage,
	AnimalName,
	AnimalDescription, 
	AttributesWrapper, 
	AttributesRow,
	Attribute,
	AttributeName,
	AttributeDots,
	AttributeValue,
	Text } from './styled';

export const AnimalProfile = () => {
	return (
		<Root>
			<AnimalImage>
				<img width={500} src={"https://images.unsplash.com/photo-1615349491492-d16377c236a4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
			</AnimalImage>
			<AnimalInfo>
				<AttributesWrapper>
					<AnimalName>Барсик</AnimalName>
					<AttributesRow>
						<Attribute>
							<AttributeName>Вид</AttributeName>
							<AttributeDots>.....................................</AttributeDots>
							<AttributeValue>Кот</AttributeValue>
						</Attribute>
					</AttributesRow>
					<AttributesRow>
							<Attribute>
								<AttributeName>Пол</AttributeName>
								<AttributeDots>.....................................</AttributeDots>
								<AttributeValue>Мальчик</AttributeValue>
							</Attribute>
					</AttributesRow>
					<AttributesRow>
						<Attribute>
							<AttributeName>Возраст</AttributeName>
							<AttributeDots>..............................</AttributeDots>
							<AttributeValue>4 года</AttributeValue>
						</Attribute>
					</AttributesRow>
					<AttributesRow>
						<Attribute>
							<AttributeName>Порода</AttributeName>
							<AttributeDots>...............................</AttributeDots>
							<AttributeValue>Без породы</AttributeValue>
						</Attribute>
					</AttributesRow>
					<AttributesRow>
						<Attribute>
							<AttributeName>Окрас</AttributeName>
							<AttributeDots>..................................</AttributeDots>
							<AttributeValue>Полосатый</AttributeValue>
						</Attribute>
					</AttributesRow>
					<AttributesRow>
						<Attribute>
							<AttributeName>Размер</AttributeName>
							<AttributeDots>...............................</AttributeDots>
							<AttributeValue>Средний</AttributeValue>
						</Attribute>
					</AttributesRow>
					
					<Text>Подробная информация</Text>
					<AnimalDescription>
						Здесь будет содержаться детализированное описание животного в свободной форме
						- характер, привычки, особенности здоровья и тд.
					</AnimalDescription>
					
					<Text>Информация о приюте</Text>
					<AttributesRow>
						<Attribute>
							<AttributeName>Приют</AttributeName>
							<AttributeDots>.................................</AttributeDots>
							<AttributeValue>Маленькое счастье</AttributeValue>
						</Attribute>
					</AttributesRow>
					<AttributesRow>
						<Attribute>
							<AttributeName>Адрес</AttributeName>
							<AttributeDots>..................................</AttributeDots>
							<AttributeValue>пос. Дружба, ул. Солнечная, д. 34а</AttributeValue>
						</Attribute>
					</AttributesRow>
					<AttributesRow>
						<Attribute>
							<AttributeName>Контактный номер</AttributeName>
							<AttributeDots>...........</AttributeDots>
							<AttributeValue>+7(012)345-67-89</AttributeValue>
						</Attribute>
					</AttributesRow>
					<AttributesRow>
						<Attribute>
							<AttributeName>Сайт</AttributeName>
							<AttributeDots>.....................................</AttributeDots>
							<AttributeValue>www.little-happiness.com</AttributeValue>
						</Attribute>
					</AttributesRow>
				</AttributesWrapper>
			</AnimalInfo>
		</Root>
	);
};