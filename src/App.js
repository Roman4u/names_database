import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [post, setPost] = useState("");

  function handleInput(event) {
    const name = event.target.value;
    setPost(name);
  }

  async function onSubmit(event) {
    event.preventDefault();
    console.log("post", post);
    const newName = { first_name: post, last_name: "Doe" };
    const result = await axios.post("/api/names", newName);
    console.log("result", result);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <form>
          <input placeholder="input" type="text" onChange={handleInput} />
          <button onClick={onSubmit}>input</button>
        </form>
      </div>
    </>
  );
}

export default App;
