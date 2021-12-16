import React, { createContext, useState } from "react";

import Component1 from "./components/Component1";
import Component4 from "./components/Component4";
import Component3 from "./components/Component3";
import Component2 from "./components/Component2";

const nameContext = createContext("");

function App() {
  const [myName, setMyName] = useState("Pelle");

  return (
    <div>
      <h1>Hello World</h1>
      <nameContext.Provider value={{ myName, setMyName }}>
        <Component1 name="name1" />
        <Component2 name="name2" />
        <Component3 name="name3" />
        <Component4 name="name4" />
      </nameContext.Provider>
    </div>
  );
}
export { nameContext };
export default App;
