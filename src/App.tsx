import React from "react";
import "./App.css";
import { Accordeon } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

// function declaration
function App(props: any) {
  return (
    <div className="App">
      <PageTitle title="This is App component" />
      <PageTitle title="Hello" />
      Article 1
      <Rating value={3} />
      <Accordeon title="Menu" collapsed={true}/>
      <Accordeon title="Users" collapsed={false} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
