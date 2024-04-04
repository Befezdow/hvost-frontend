import { Root, Slider, Text } from "./styled";

export const Home = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Root>
      <Text>Slider:</Text>
      <Slider onChangeComplete={onChange} $backgroundColor='yellow' />
    </Root>
  );
};
