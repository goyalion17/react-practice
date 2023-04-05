import React from "react";

type RatingPropsType = {
  value: number
}

export function Rating(props: RatingPropsType) {
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

type StarPropsType = {
  selected: boolean
}

export function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star</b> </span>;
    } else {
        return <span>star </span>;
}
}
