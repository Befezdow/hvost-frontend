import { Route, Routes } from "react-router";
import { Home } from "../pages/home";
import { AnimalList } from "../pages/animalList";
import { AnimalDetails } from "../pages/animalDetails";
import { NotFound } from "../pages/notFound";

export const Routing = () => {
  return (
    <Routes>
      <Route index path="/" Component={Home} />
      <Route path="animals" Component={AnimalList} />
      <Route path="animals/:id" Component={AnimalDetails} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};
