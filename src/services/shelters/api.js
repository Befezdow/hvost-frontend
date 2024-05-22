import apiClient from "../apiClient";

export async function getShelterList(offset, limit) {
  const path = "/shelters";
  const params = { offset, limit };

  return (await apiClient.post(path, params)).data;
}

export async function getShelterDetails(shelterId) {
  const path = `/shelters/${shelterId}`;
  return (await apiClient.get(path)).data;
}
