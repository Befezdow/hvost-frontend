import { Root, 
	ShelterImage, 
	ShelterInfo,
	ShelterName,
	AttributesWrapper, 
	AttributesRow,
	Attribute,
	AttributeName,
	AttributeDots,
	AttributeValue,
	ShelterDescription,
	Text } from "./styled";

export const ShelterProfile = () => {
	return (
		<Root>
			<ShelterImage>
				<img width={500} src="https://dynamic.brandcrowd.com/asset/logo/714ca687-103d-4d63-99ae-10512f983d60/insta-square?logoTemplateVersion=1&v=638321033099730000"/>
			</ShelterImage>
			<ShelterInfo>
				<ShelterName>Маленькое счастье</ShelterName>
				<AttributesWrapper>
					<AttributesRow>
						<Attribute>
							<AttributeName>Деятельность</AttributeName>
							<AttributeDots>....................</AttributeDots>
							<AttributeValue>Приют для кошек и собак</AttributeValue>
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
					<AttributesRow>
						<Attribute>
							<AttributeName></AttributeName>
							<AttributeDots></AttributeDots>
							<AttributeValue></AttributeValue>
						</Attribute>
					</AttributesRow>
				</AttributesWrapper>
				<Text>Подробная информация</Text>
				<ShelterDescription>Описание приюта - В дверном проеме стоял великан. Его лицо скрывалось за длинными спутанными прядями волос и огромной клочковатой бородой, но зато были видны его глаза, маленькие и блестящие, как черные жуки. Великан протиснулся в хижину и пригнулся, но голова его все равно касалась потолка — уж слишком он был велик. Он наклонился, поднял дверь и легко поставил ее на место. Грохот урагана, доносившийся снаружи, сразу стал потише. Великан повернулся и внимательно оглядел всех, кто был в хижине. — Ну чего, может, чайку сделаете, а? Непросто до вас добраться, да… устал я… Великан шагнул к софе, на которой сидел застывший от страха Дадли. — Ну-ка подвинься, пузырь, — приказал незнакомец. Дадли взвизгнул и, соскочив с софы, рванулся к вышедшей из второй комнаты матери и спрятался за нее. Тетя Петунья в свою очередь шагнула за спину дяди Вернона и пугливо пригнулась, словно надеялась, что за мужем ее не будет видно. — А вот и наш Гарри! — удовлетворенно произнес великан. Гарри всмотрелся в свирепое, страшное лицо, скрытое волосами, и увидел, что глаза-жуки сузились в улыбке. — Когда я видел тебя в последний раз, ты совсем маленьким был, — сообщил великан. — А сейчас вон как вырос — и вылитый отец, ну один в один просто. А глаза материны. Дядя Вернон издал какой-то странный звук, похожий на скрип, и шагнул вперед. — Я требую, чтобы вы немедленно покинули этот дом, сэр! — заявил он. — Вы взломали дверь и вторглись в чужие владения! — Да заткнись ты, Дурсль!</ShelterDescription>
			</ShelterInfo>
		</Root>
	);
};