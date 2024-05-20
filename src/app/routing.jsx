import { Route, Routes } from "react-router";
import { Home } from "../pages/home";
import { AnimalList } from "../pages/animalList";
import { AnimalDetails } from "../pages/animalDetails";
import { ShelterList } from "../pages/shelterList";
import { ShelterDetails } from "../pages/shelterDetails";
import { LoginPage } from "../pages/login";
import { NotFound } from "../pages/notFound";
import { AnimalTable } from "../pages/animalTable";

export const Routing = () => {
  return (
    <Routes>
      <Route index path="/" Component={Home} />
      <Route path="animals" Component={AnimalList} />
      <Route path="animals/:id" Component={AnimalDetails} />
      <Route path="shelters" Component={ShelterList}/>
      <Route path="shelters/:id" Component={ShelterDetails}/>
      <Route path="login" Component={LoginPage}/>
      <Route path="table" Component={AnimalTable}/>
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};
