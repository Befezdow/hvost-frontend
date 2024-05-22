import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Carousel } from "antd";
import mockImage from "../../assets/images/mock_shelter_image.jpg";
import { Loadable } from "../../components/loadable";
import { getShelterDetails } from "../../services/shelters";
import { mapPhotoSrcs } from "../../utils/dataMappers";
import {
  Root,
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
  Text,
} from "./styled";

export const ShelterDetails = () => {
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
        const result = await getShelterDetails(id);
        setData(result);
      } catch (error) {
        // TODO: show error
        console.log(error);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [id, navigate]);

  const name = data?.name ?? "-";
  const description = data?.description ?? "-";
  const address = data?.address ?? "-";
  const phoneNumber = data?.phoneNumber ?? "-";
  const email = data?.email ?? "-";
  const imageSrcs = mapPhotoSrcs(data?.photos ?? [], mockImage);
  const links = data?.links ?? [];
  const website = links.length > 0 ? links[0] : "-";

  return (
    <Loadable isLoading={isLoading}>
      <Root>
        <Carousel effect="fade">
          <ShelterImage>
            {imageSrcs.map((elem, index) => (
              <img key={index} width={500} src={elem} />
            ))}
          </ShelterImage>
        </Carousel>
        <ShelterInfo>
          <ShelterName>{name}</ShelterName>
          <AttributesWrapper>
            <AttributesRow>
              <Attribute>
                <AttributeName>Адрес</AttributeName>
                <AttributeDots>
                  ..................................
                </AttributeDots>
                <AttributeValue>{address}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Контактный номер</AttributeName>
                <AttributeDots>...........</AttributeDots>
                <AttributeValue>{phoneNumber}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Email</AttributeName>
                <AttributeDots>....................................</AttributeDots>
                <AttributeValue>{email}</AttributeValue>
              </Attribute>
            </AttributesRow>
            <AttributesRow>
              <Attribute>
                <AttributeName>Сайт</AttributeName>
                <AttributeDots>
                  .....................................
                </AttributeDots>
                <AttributeValue>{website}</AttributeValue>
              </Attribute>
            </AttributesRow>
          </AttributesWrapper>
          <Text>Подробная информация</Text>
          <ShelterDescription>{description}</ShelterDescription>
        </ShelterInfo>
      </Root>
    </Loadable>
  );
};
