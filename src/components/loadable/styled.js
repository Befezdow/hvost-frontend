import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 56px 0px;
`;

export const LoadingIcon = styled(LoadingOutlined)`
  font-size: 3em;
`;
