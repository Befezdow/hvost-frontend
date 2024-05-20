import { Root, HeroSection, TextSection, HeroImage, HeaderText, Text, Button } from "./styled";
import { AnimalTable } from "../animalTable";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  
  const navigateToAnimalList = () => {
    navigate("/animals");
  };
  
  return (
    <Root>
      <HeroSection>
        <TextSection>
          <HeaderText>Этим хвостам нужна любовь и забота!</HeaderText>
          <Text>Десятки животных ждут свои любящие семьи. Подарите им второй шанс на счастье.</Text>
          <Button type="primary" onClick={navigateToAnimalList}>Перейти к каталогу животных</Button>
        </TextSection>
        <HeroImage>
          <img width={750} src="https://www.americanhumane.org/app/uploads/2016/08/shutterstock_162633491.jpg" />
        </HeroImage>
      </HeroSection>
      
      <AnimalTable/>
    </Root>
  );
};
