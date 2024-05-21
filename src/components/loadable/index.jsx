import { Root, LoadingIcon } from "./styled";

export const Loadable = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <Root>
        <LoadingIcon />
      </Root>
    );
  }

  return children;
};
