import { Fragment } from "react";
import Cat from "./cat";

export function App() {
  return (
    <>
      <Cat />
      <Greetings />
      <Hierarchy />
    </>
  );
}

export function Greetings() {
  const name = "Kibucha";
  return (
    <Fragment>
      <h1 className="title">Hello {name}</h1>
      <p>Nice to meet you.</p>
    </Fragment>
  );
}

export function Hierarchy() {
  const manager = "Jeff";
  return (
    <>
      <h2 className="title2">{manager} here</h2>
      <p>I'm the manager</p>
    </>
  );
}

export default App;