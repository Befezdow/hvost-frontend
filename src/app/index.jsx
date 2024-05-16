import { BrowserRouter } from "react-router-dom";
import { Root } from "./styled";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Routing } from "./routing";

export const App = () => (
  <Root>
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  </Root>
);
