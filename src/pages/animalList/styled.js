import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  justify-content: center;
  justify-items: center;
  column-gap: 80px;
  row-gap: 40px;
`;
