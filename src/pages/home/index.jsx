import { Root, Slider, Text } from "./styled";

export const Home = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Root>
      <Text> --- Здесь будет основная информация о сервисе ---</Text>
      <Text>Slider:</Text>
      <Slider onChangeComplete={onChange} $backgroundColor='yellow' />
    </Root>
  );
};
