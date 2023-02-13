import React from "react";

export function Accordeon(props: any) {
  console.log("Accordeon rendered");
  return (
    <div className="Accordeon">
      <AccordeonTitles title={props.title} />
      <AccordeonBody />
    </div>
  );
}

export function AccordeonTitles(props: any) {
  return (
    <div className="AccordeonTitles">
      <h3>{props.title}</h3>
    </div>
  );
}
export function AccordeonBody() {
  return (
    <div className="AccordeonBody">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
