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
  const mappedPhoto = mapPhotoSrcs(photos)[0];

  return (
    <Root to={`/animals/${id}`}>
      <AnimalImage>
        <img width={225} src={mappedPhoto} alt="Animal photo" />
      </AnimalImage>
      <AnimalInfo>
        <AnimalName>{nickname}</AnimalName>
        <AnimalAge>{mappedAge}</AnimalAge>
        <AnimalGender>{mappedGender}</AnimalGender>
      </AnimalInfo>
    </Root>
  );
};
