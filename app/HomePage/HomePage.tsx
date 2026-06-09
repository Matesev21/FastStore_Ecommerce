import { NavBar } from "./Components/NavBar/Navbar";
import { ProductLoop } from "./Components/ProductLoop/productloop";
import { MainInformation } from "./Components/MainInformation/mainInfo";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <ProductLoop />
      <MainInformation />
    </div>
  );
};
