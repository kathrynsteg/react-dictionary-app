import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <h2>{props.definition.word}</h2>
        <Phonetic phonetic={props.definition.phonetic} />
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
