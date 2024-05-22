import { calcAge } from "./date";

export const mapGender = (gender) => {
  if (gender === "BOY") {
    return "Мальчик";
  }

  if (gender === "GIRL") {
    return "Девочка";
  }

  return "Ошибка";
};

export const mapAge = (rawMinBirthDate, rawMaxBirthDate) => {
  const minBirthDate = new Date(rawMinBirthDate);
  const maxBirthDate = new Date(rawMaxBirthDate);

  const age = calcAge(minBirthDate, maxBirthDate);

  if (age === 0) {
    return "Меньше полугода";
  }

  const lastAgeNumber = age % 10;

  if (lastAgeNumber === 1) {
    return `${age} год`;
  }

  if (lastAgeNumber === 2 || lastAgeNumber === 3 || lastAgeNumber === 4) {
    return `${age} года`;
  }

  return `${age} лет`;
};

export const mapSize = (size) => {
  if (size === "SMALL") {
    return "Маленький";
  }

  if (size === "MEDIUM") {
    return "Средний";
  }

  if (size === "LARGE") {
    return "Большой";
  }

  return "Ошибка";
};

export const mapSpecies = (species) => {
  if (species === "CAT") {
    return "Кот";
  }

  if (species === "DOG") {
    return "Собака";
  }

  return "Ошибка";
};

export const mapPhotoSrcs = (photos, mockImage) => {
  if (photos.length === 0) {
    return [mockImage];
  }

  return photos.map((elem) => `data:image/png;base64,${elem}`);
};
