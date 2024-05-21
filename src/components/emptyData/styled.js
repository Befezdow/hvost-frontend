import styled from "styled-components";
import { InboxOutlined } from "@ant-design/icons";

export const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 56px 0px;
  color: #828282;
`;

export const Message = styled.div`
  font-size: 1.2em;
`;

export const EmptyDataIcon = styled(InboxOutlined)`
  font-size: 3em;
`;
