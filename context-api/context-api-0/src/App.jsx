import { createContext, useContext, useState } from "react";
import MyContextProvider, { MyContext } from "./features/MyContext";

// const MyContext = createContext();

// function App() {
  // const [count, setCount] = useState(0);
  
//   return (
//     // it re-renders all the components 
//     <MyContext.Provider value = {{count, setCount}}>
//       <OuterMost>
//         <Outer>
//           <Inner>
//             <InnerMost>
//               Count : 
//             </InnerMost>
//           </Inner>
//           <Inner>
//             <InnerMost>
//               Count : 
//             </InnerMost>
//           </Inner>
//         </Outer>
//       </OuterMost>
//     </MyContext.Provider>
//   );
// }

function App() {
  
  return (
    <MyContextProvider>
      <OuterMost>
        <Outer>
          <Inner>
            <InnerMost>
              Count : 
            </InnerMost>
          </Inner>
          <Inner>
            <InnerMost>
              Count : 
            </InnerMost>
          </Inner>
        </Outer>
      </OuterMost>
    </MyContextProvider>
  );
}


export default App;

const OuterMost = ({ children }) => {
  console.log("Outermost");
  return (
    <Div>
      <h3>Outermost</h3>
      {children}
    </Div>
  );
};

const Outer = ({ children }) => {
  console.log("Outer");
  return (
    <Div>
      <h3>Outer</h3>
      {children}
    </Div>
  );
};

const Inner = ({ children }) => {
  console.log("Inner");
  return (
    <Div>
      <h3>Inner</h3>
      {children}
    </Div>
  );
};

const InnerMost = ({ children }) => {
  console.log("Innermost");
  const {count, setCount} = useContext(MyContext);
  return (
    <Div >
      <h3 onClick = {() => setCount((cnt) => cnt + 1)} >Innermost</h3>
      {children}
      {` ${count}`}
    </Div>
  );
};

const Div = ({ children }) => {
  return (
    <div className="max-w-fit m-auto bg-black p-4 border-2 rounded-md text-xl text-white text-center">
      {children}
    </div>
  );
};
