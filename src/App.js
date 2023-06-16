import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Step from "./components/Step";
import Dropdown from "./components/Dropdown";
const carBrands = ["AUDI", "BMW", "VAUXHALL", "MERCEDES", "PEUGOT", "RENAULT"];
const carColors = ["BLUE", "RED", "BLACK", "ORANGE"];

function App() {
  const [step, setStep] = useState(1);
  const [make, setMake] = useState();
  const [color, setColor] = useState();
  const [code, setCode] = useState(
    (Math.random() + 1).toString(36).substring(7).toUpperCase()
  );
  var steps = {
    1: {
      title: "MAKE",
      controls: [
        {
          title: "MAKE",
          type: "dd",
          data: carBrands,
          value: make,
          onchange: setMake,
        },
      ],
      next: {
        step: 2,
        title: "NEXT",
      },
    },
    2: {
      title: "COLOR",
      controls: [
        {
          title: "COLOR",
          type: "dd",
          data: carColors,
          value: color,
          onchange: setColor,
        },
      ],
      next: {
        step: 3,
        title: "NEXT",
      },
    },
    3: {
      title: "CODE",
      controls: [
        {
          title: "CODE",
          type: "input",
          data: { value: code, disabled: true, onchange: setCode },
        },
      ],
      next: {
        step: 0,
        title: "DONE",
      },
    },
  };

  const stepResult = (
    <Step
      navBtnClick={() => setStep(steps[step].next.step)}
      data={steps[step]}
    ></Step>
  );
  return (
    <div className="App">
      <header className="App-header">
        {step == 0 ? (
          <p>
            Generated Text
            <br></br>
            <br></br>I have a {make} and the color is {color}.<br></br>
            <br></br>
            {color == "RED" ? (
              <p>
                THE CAR IS RED! NICE!!<br></br>
                <br></br>
                <br></br>
              </p>
            ) : null}
            REF:{code}
          </p>
        ) : (
          stepResult
        )}
      </header>
    </div>
  );
}

export default App;
