import { useParams } from "react-router-dom";
import { Root } from "./styled";
import { AnimalProfile } from "../../components/animalProfile";

export const AnimalDetails = () => {
  const { id } = useParams();

  return (
    <Root>
      <div>Animal details page: {id}</div>
      <AnimalProfile />
    </Root>
  );
};
