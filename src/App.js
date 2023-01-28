import { useState } from "react";
import Selectors from "./components/Selectors";
import "./App.css";

const App = () => {
  const [elements, setElements] = useState([]);

  return (
    <div
      style={{
        margin: "20px",
        display: "grid",
        gridTemplateColumns: "auto auto",
        rowGap: "50px",
        height: "50vh",
      }}
    >

      
      <Selectors elements={elements} setElements={setElements} />


      <div
        style={{ border: "5px solid grey", height: "auto", padding: "20px", width: 'auto'}}
      >
        {elements.map((e) => (
          <div style={{ margin: "10px" }}>
            <label for={e.id}>{e.label}</label>
            <br />
            <input type={e.type} id={e.id}></input>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
