import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Routing } from "./routing";

export const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  </>
);
