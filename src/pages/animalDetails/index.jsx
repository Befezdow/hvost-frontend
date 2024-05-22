import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Carousel } from "antd";
import mockImage from "../../assets/images/mock_animal_image.jpg";
import { Loadable } from "../../components/loadable";
import { getAnimalDetails } from "../../services/animals";
import {
  mapAge,
  mapSpecies,
  mapGender,
  mapPhotoSrcs,
  mapSize,
} from "../../utils/dataMappers";
import {
  Root,
  AnimalImage,
  AnimalInfo,
  AnimalName,
  AnimalDescription,
  AttributesWrapper,
  AttributesRow,
  Attribute,
  AttributeName,
  AttributeDots,
  AttributeValue,
  Text,
} from "./styled";

export const AnimalDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      navigate({ pathname: `../` });
    }

    async function fetchData() {
      setIsLoading(true);
      try {
        const result = await getAnimalDetails(id);
        setData(result);
      } catch (error) {
        // TODO: show error
        console.log(error);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [id, navigate]);

  const imageSrcs = mapPhotoSrcs(data?.photos ?? [], mockImage);
  const nickname = data?.nickname ?? "-";
  const species = data?.species ? mapSpecies(data.species) : "-";
  const gender = data?.gender ? mapGender(data.gender) : "-";
  const age =
    data?.minBirthDate && data?.maxBirthDate
      ? mapAge(data.minBirthDate, data.maxBirthDate)
      : "-";
  const breed = data?.breed ?? "-";
  const color = data?.color ?? "-";
  const size = data?.size ? mapSize(data.size) : "-";
  const description = data?.description ?? "-";
  const shelterName = data?.shelter.name ?? "-";
  const shelterAddress = data?.shelter.address ?? "-";
  const shelterPhoneNumber = data?.shelter.phoneNumber ?? "-";
  const shelterEmail = data?.shelter.email ?? "-";
  const shelterLinks = data?.shelter.links ?? [];
  const shelterWebsite = shelterLinks.length > 0 ? shelterLinks[0] : "-";

  return (
    <Loadable isLoading={isLoading}>
      <Root>
        <Carousel effect="fade">
          <AnimalImage>
            {imageSrcs.map((elem, index) => (
              <img key={index} width={500} src={elem} />
            ))}
          </AnimalImage>
        </Carousel>
        <AnimalInfo>
          <AttributesWrapper>
            <AnimalName>{nickname}</AnimalName>
            <AttributesRow>
              <Attribute>
                <AttributeName>Вид</AttributeName>
                <AttributeDots>
                  .....................................
                </AttributeDots>
                <AttributeValue>{species}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Пол</AttributeName>
                <AttributeDots>
                  .....................................
                </AttributeDots>
                <AttributeValue>{gender}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Возраст</AttributeName>
                <AttributeDots>..............................</AttributeDots>
                <AttributeValue>{age}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Порода</AttributeName>
                <AttributeDots>...............................</AttributeDots>
                <AttributeValue>{breed}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Окрас</AttributeName>
                <AttributeDots>
                  ..................................
                </AttributeDots>
                <AttributeValue>{color}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Размер</AttributeName>
                <AttributeDots>...............................</AttributeDots>
                <AttributeValue>{size}</AttributeValue>
              </Attribute>
            </AttributesRow>

            <Text>Подробная информация</Text>
            <AnimalDescription>{description}</AnimalDescription>

            <Text>Информация о приюте</Text>
            <AttributesRow>
              <Attribute>
                <AttributeName>Приют</AttributeName>
                <AttributeDots>.................................</AttributeDots>
                <AttributeValue>{shelterName}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Адрес</AttributeName>
                <AttributeDots>
                  ..................................
                </AttributeDots>
                <AttributeValue>{shelterAddress}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Контактный номер</AttributeName>
                <AttributeDots>...........</AttributeDots>
                <AttributeValue>{shelterPhoneNumber}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Email</AttributeName>
                <AttributeDots>
                  ....................................
                </AttributeDots>
                <AttributeValue>{shelterEmail}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Сайт</AttributeName>
                <AttributeDots>
                  .....................................
                </AttributeDots>
                <AttributeValue>{shelterWebsite}</AttributeValue>
              </Attribute>
            </AttributesRow>
          </AttributesWrapper>
        </AnimalInfo>
      </Root>
    </Loadable>
  );
};
