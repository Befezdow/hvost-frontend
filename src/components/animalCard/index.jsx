import mockImage from "../../assets/images/mock_animal_image.jpg";
import { mapAge, mapPhotoSrcs } from "../../utils";
import {
  Root,
  AnimalImage,
  AnimalInfo,
  AnimalName,
  AnimalGender,
  AnimalAge,
} from "./styled";

export const AnimalCard = ({
  id,
  nickname,
  photos,
  gender,
  minBirthDate,
  maxBirthDate,
}) => {
  const mappedGender = gender === "BOY" ? "Мальчик" : "Девочка";
  const mappedAge = mapAge(minBirthDate, maxBirthDate);
  const mappedPhoto = mapPhotoSrcs(photos, mockImage)[0];

  return (
    <Root to={`/animals/${id}`}>
      <AnimalImage>
        <img width={195} height={260} src={mappedPhoto} alt="Animal photo" />
      </AnimalImage>
      <AnimalInfo>
        <AnimalName>{nickname}</AnimalName>
        <AnimalAge>{mappedAge}</AnimalAge>
        <AnimalGender>{mappedGender}</AnimalGender>
      </AnimalInfo>
    </Root>
  );
};
