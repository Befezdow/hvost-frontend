import mockImage from "../../assets/images/mock_shelter_image.jpg";
import { mapPhotoSrcs } from "../../utils";
import {
  Root,
  ShelterImage,
  ShelterInfo,
  ShelterName,
  ShelterAddress,
  Text,
  ShelterPhoneNumber,
} from "./styled";

export const ShelterCard = ({ id, name, address, phoneNumber, photos }) => {
  const mappedPhoto = mapPhotoSrcs(photos, mockImage)[0];

  return (
    <Root to={`/shelters/${id}`}>
      <ShelterImage>
        <img height={200} src={mappedPhoto} alt="Shelter photo" />
      </ShelterImage>
      <ShelterInfo>
        <ShelterName>{name}</ShelterName>
        <Text>Адрес</Text>
        <ShelterAddress>{address}</ShelterAddress>
        <Text>Номер телефона</Text>
        <ShelterPhoneNumber>{phoneNumber}</ShelterPhoneNumber>
      </ShelterInfo>
    </Root>
  );
};
