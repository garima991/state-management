import React from "react";
import { useGetAllProductQuery } from "../store/service/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();
  console.log(data);

  if (isError) {
    return <h1> error encountered</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="m-4 p-3 flex flex-col gap-2 border-2 border-black bg-gray-300">
      {data?.products.map((p) => (
        <div className="text-base bg-gray-100 p-2 border-2 border-gray-200 rounded-md">
          <h1 key={p.id}>{p.title}</h1>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;