import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        Example: <em>{props.meaning.example}</em>
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
