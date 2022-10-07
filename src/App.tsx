import { useLayoutEffect } from "react";
import "./styles.css";

export default function App() {
  let employees: Object = {
    name: "ha",
    last: "bib",
    place: "German",
  };

  let vacantObject: {}; // because this is fucking vacant
  let arrayOfNames: string[] = ["Ali Sina", "Yousofi", "catch and halt"];
  let infer = arrayOfNames[0]; // the type infered

  // array of mixed type
  let mixedArrayOfTypes: (string | Number | Object)[] = [
    { one: "1" },
    "Ali",
    444,
  ];

  return (
    <div className="App">
      <h1> {employees.last + employees.name} </h1>
      <p> {arrayOfNames[0]} </p>
      <p> {typeof infer}</p>
      <ul>
        <li> {mixedArrayOfTypes[0].one} </li>
      </ul>
    </div>
  );
}
