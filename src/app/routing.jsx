import { Route, Routes } from "react-router";
import Authorized from "../components/authorized";
import { Home } from "../pages/home";
import { AnimalList } from "../pages/animalList";
import { AnimalDetails } from "../pages/animalDetails";
import { ShelterList } from "../pages/shelterList";
import { ShelterDetails } from "../pages/shelterDetails";
import { LoginPage } from "../pages/login";
import { NotFound } from "../pages/notFound";
import { PersonalAccount } from "../pages/personalAccount";

export const Routing = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="animals" element={<AnimalList />} />
      <Route path="animals/:id" element={<AnimalDetails />} />
      <Route path="shelters" element={<ShelterList />} />
      <Route path="shelters/:id" element={<ShelterDetails />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="personalAccount" element={Authorized(<PersonalAccount />)} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
