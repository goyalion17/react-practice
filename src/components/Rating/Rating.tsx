import React from "react";

export function Rating(props: any) {
  console.log("Rating rendered");

  return (
    <div className="Rating">
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={false} />
    </div>
  );
}

export function Star(props: any) {
  console.log("Star rendering");
    if (props.selected === true) {
        return <span><b>star</b> </span>;
    } else {
        return <span>star </span>;
}
}
