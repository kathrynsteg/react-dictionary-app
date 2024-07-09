import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>;
      {props.meaning.definition.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {props.meaning.definition}
              <br />
              <em>{props.meaning.example}</em>
            </p>
          </div>
        );
      })}
      <p>{props.meaning.definition[0]}</p>;<p>{props.meaning.example[0]}</p>;
    </div>
  );
}
