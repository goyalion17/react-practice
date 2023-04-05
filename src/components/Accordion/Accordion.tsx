import React from "react";

type AccordionPropsType = {
  title: string,
  collapsed: boolean
}

export function Accordeon(props: AccordionPropsType) {
  
    return (
    <div className="Accordeon">
      <AccordeonTitles title={props.title} />
      {props.collapsed === true ? <AccordeonBody /> : null }
    </div>
  );
}

type AccordeonTitlesPropsType = {
  title: string
}

export function AccordeonTitles(props: AccordeonTitlesPropsType) {
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
