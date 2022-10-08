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
  
  // now with tuples
  // 1 fixed number 2 types are predfined
  
  let firstTuple: [string, number, boolean] = ["Codesandbox", 3, true];
  let secondTuple: [string, number, number, object] = ["sandbox", 2, 2, {name: "ali"}]
  let optionalTuple = [string, number?] = ["one"]; // ok
  
  // constants as it is in c++
  enum Month {
    One, Two, Three, Four, Five, Six, Seven
  };
  
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
