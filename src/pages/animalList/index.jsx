import { Root } from "./styled";
import { AnimalCard } from "../../components/animalCard";
import { Pagination } from 'antd';

export const AnimalList = () => {
	return (
		<Root>
			<AnimalCard />
			<AnimalCard />
			<AnimalCard />
			<AnimalCard />
			<AnimalCard />
			<AnimalCard />
			<AnimalCard />
			<AnimalCard />

			<Pagination defaultCurrent={1} pageSize={10} total={23} />
		</Root>
	);
};