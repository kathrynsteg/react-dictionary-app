import React, { useState } from "react";
import axios from "axios";
import Result from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function search() {
    let apiKey = "15aa7ff71012241631cb1665815teob0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word (e.g. forest) and press 'Enter'"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </form>{" "}
        </section>
        <Result definition={definition} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
