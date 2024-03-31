import { useParams } from "react-router-dom";

export const AnimalDetails = () => {
  const { id } = useParams();

  return <div>Animal details page: {id}</div>;
};
