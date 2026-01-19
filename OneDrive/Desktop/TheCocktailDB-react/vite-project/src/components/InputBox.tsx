import { useState } from "react";
import "./InputBox.css";
//import axios from "axios";
export function InputBox() {
  const [userinput, setUserInput] = useState("");
  function saveInput(event) {
    setUserInput(userinput);
  }
  return (
    <>
      <form className="main-form">
        <div className="input-box-container">
          <input
            onChange={saveInput}
            placeholder="put the name of the drink"
            className="input-box"
          />
          <button className="submit-button">send</button>
        </div>

        <div>
          <label className="language-label">
            choose your preffered language
          </label>
          <select className="Select-language">
            <option>english</option>
            <option>francais</option>
            <option>espagnol</option>
            <option>german</option>
            <option>italian</option>
          </select>
        </div>
      </form>
    </>
  );
}
