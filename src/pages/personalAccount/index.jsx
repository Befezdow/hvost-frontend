import { AnimalsTable } from "./animalsTable";
import { ShelterTabs } from './styled';

const items = [
  {
    key: "shelterInfo",
    label: "Информация о приюте",
    children: "Информация о приюте",
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
