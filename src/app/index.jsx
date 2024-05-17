import {ConfigProvider} from 'antd';
import { BrowserRouter } from "react-router-dom";
import { Root } from "./styled";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Routing } from "./routing";

export const App = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#000000',
        colorPrimaryHover: "#474747",
      },
    }}
  >
  <Root>
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  </Root>
  </ConfigProvider>
);
