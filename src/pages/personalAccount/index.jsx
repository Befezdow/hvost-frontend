import { AnimalsTable } from "./animalsTable";
import { ShelterInfo } from "./shelterInfo";
import { ShelterTabs } from "./styled";

const items = [
  {
    key: "shelterInfo",
    label: "Информация о приюте",
    children: <ShelterInfo />,
  },
  {
    key: "animalsList",
    label: "Список животных",
    children: <AnimalsTable />,
  },
];

export const PersonalAccount = () => (
  <ShelterTabs defaultActiveKey="shelterInfo" items={items} />
);
