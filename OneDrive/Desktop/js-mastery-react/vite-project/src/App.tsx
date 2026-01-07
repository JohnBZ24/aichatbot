import "./App.css";
import axios from "axios";
import { useState, type ChangeEvent, type MouseEvent } from "react";

function App() {
  const [longUrl, setLongUrl] = useState<string>("");

  const handle_click = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault(); // stop form submit refresh

    try {
      const res = await axios.post("http://localhost:3000/url", {
        longUrl: longUrl,
      });

      console.log("Short URL value:", res.data.newUrl);
      alert(`Short URL: ${res.data.newUrl}`);
    } catch (err: any) {
      console.log("Error:", err?.response?.data || err?.message || err);
      alert("Request failed (check console).");
    }
  };

  return (
    <>
      <div className="page">
        <h1>URL SHORTENER APP</h1>
        <form className="form">
          <input
            className="input"
            placeholder="paste your URL  here"
            value={longUrl}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLongUrl(e.target.value)
            }
          ></input>
          <br />
          <button className="btn" onClick={handle_click}>
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
