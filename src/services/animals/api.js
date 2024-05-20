import apiClient from "../apiClient";

export async function getAnimalList(offset, limit, shelterId = null) {
  const path = "/animals";
  const params = { offset, limit };
  if (shelterId != null) {
    params.shelterId = shelterId;
  }

  return (await apiClient.post(path, params)).data;
}

export async function getAnimalDetails(animalId) {
  const path = `/animals/${animalId}`;
  return (await apiClient.get(path)).data;
}
