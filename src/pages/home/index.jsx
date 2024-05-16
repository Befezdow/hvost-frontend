import { Root, HeroSection, Slider, TextSection, HeroImage, HeaderText, Text, Button } from "./styled";

export const Home = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Root>
      <HeroSection>
        <TextSection>
          <HeaderText>Этим хвостам нужна любовь и забота!</HeaderText>
          <Text>Десятки животных ждут свои любящие семьи. Подарите им второй шанс на счастье.</Text>
          <Button type="primary">Перейти к каталогу животных</Button>
        </TextSection>
        <HeroImage>
          <img width={600} src="https://www.americanhumane.org/app/uploads/2016/08/shutterstock_162633491.jpg" />
        </HeroImage>
      </HeroSection>
      
      
      
      <Text> --- Здесь будет основная информация о сервисе ---</Text>
      <Text>Slider:</Text>
      <Slider onChangeComplete={onChange} $backgroundColor='yellow' />
    </Root>
  );
};
