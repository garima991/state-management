import AllProducts from "./components/AllProducts";
import SpecificProduct from "./components/SpecificProduct";
import NewProduct from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <AllProducts />
      <SpecificProduct />
      <NewProduct />
      <UpdateProduct productId={4} />
      <DeleteProduct productId={2} />
    </div>
  );
};

export default App;