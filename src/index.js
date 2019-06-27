import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { SevenSeg } from "@kiraarghy/seven-segment";
import { useInterval } from "./useInterval";

function App() {
  const [num, setNum] = React.useState(0);

  useInterval(() => {
    if (num === 99) {
      setNum(0);
      return;
    }
    setNum(num + 1);
  }, 150);

  let numarray = num.toString().split("");

  return (
    <div className="App">
      {numarray.length > 1 ? (
        <>
          <SevenSeg width="30px" number={numarray[0]} color="#f28218" />
          <SevenSeg width="30px" number={numarray[1]} color="#f28218" />
        </>
      ) : (
        <>
          <SevenSeg width="30px" number={0} color="#f28218" />
          <SevenSeg width="30px" number={numarray[0]} color="#f28218" />
        </>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
