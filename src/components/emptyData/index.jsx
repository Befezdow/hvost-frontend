import { Root, Message, EmptyDataIcon } from "./styled";

export const EmptyData = ({message}) => (
  <Root>
    <EmptyDataIcon />
    <Message>{message}</Message>
  </Root>
);
