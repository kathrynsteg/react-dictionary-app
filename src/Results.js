import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <section>
          <h2>{props.definition.word}</h2>
          <Phonetic phonetic={props.definition.phonetic} />
        </section>
        <section>
          {props.definition.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
