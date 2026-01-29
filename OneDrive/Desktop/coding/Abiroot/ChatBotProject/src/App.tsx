import { useState } from "react";
import { ChatInput } from "./components/chatInput";
import { ChatMessages } from "./components/ChatMessage";
function App() {
  const [chatmessages, setChatMessages] = useState<
    { message: string; sender: string }[]
  >([]);
  const [key, setKey] = useState<string>("");
  function handleKey(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  function saveInput(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <>
      <form>
        <label htmlFor="key">Enter your openrouter key</label>
        <input id="key" onChange={saveInput} />
        <button onClick={handleKey}>submit </button>
      </form>
      <ChatMessages chatmessages={chatmessages} />
      <ChatInput
        chatmessages={chatmessages}
        setChatMessages={setChatMessages}
      />
    </>
  );
}

export default App;
