import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <h2>{props.definition.word}</h2>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
