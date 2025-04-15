import React from "react";

export default function Card() {
  return (
    <div className="flex flex-col items-center w-full p-8 bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-lg"
        src="https://tse3.mm.bing.net/th?id=OIP.a6xPVSsHEtILMqTzps601AHaHa&pid=Api&P=0&h=480"
        alt=""
      />
        <h5 className="text-xl font-semibold text-gray-900 dark:text-white m-2">
          Hey There !
        </h5>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
    </div>
  );
}
