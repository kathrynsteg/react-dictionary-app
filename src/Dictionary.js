import React, { useState } from "react";
import axios from "axios";
import Result from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiKey = "15aa7ff71012241631cb1665815teob0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word and press 'Enter'"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <Result definition={definition} />
      </section>
    </div>
  );
}
