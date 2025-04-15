import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  decrement,
  increase,
  increment,
  reset,
} from "./features/counterFeature";
import "./App.css";

function App() {
  const [input, setInput] = useState(1);
  const count = useSelector((state) => {
    console.log(state);
    return state.count;
  });
  console.log("State -> ", count);
  const dispatch = useDispatch();

  return (
    <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="text-5xl w-full py-4 px-6 text-center flex justify-center items-center text-white"
        value={input}
        onChange={({ target: { value } }) => setInput(value)}
        required
      />
      <div className="text-6xl flex justify-center items-center gap-20 ">
        <button
          className="p-6 px-10 "
          onClick={() =>
            input && isFinite(input) ? dispatch(decrease(input)) : ""
          }
        >
          -
        </button>
        {count}
        <button
          className="p-6 px-10 "
          onClick={() =>
            input && isFinite(input) ? dispatch(increase(input)) : ""
          }
        >
          +
        </button>
      </div>
      <button className= "text-4xl" onClick={() => dispatch(reset())}>
        reset
      </button>
    </form>
  );
}

export default App
