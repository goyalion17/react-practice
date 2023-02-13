import React from "react";
import "./App.css";
import { Accordeon } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

// function declaration
function App() {
  return (
    <div className="App">
      <PageTitle title="This is App component" />
      <PageTitle title="Hello" />
      Article 1
      <Rating value={3} />
      <Accordeon title="Hi" />
      <Accordeon title="Yo" />
      Article 2
      <Rating value={4} />
    </div>
  );
}

function PageTitle(props: any) {
  return <h1>{props.title}</h1>;
}

export default App;
