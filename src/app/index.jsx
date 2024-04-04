import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/header";
import { Routing } from "./routing";

export const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  </>
);
