import { useEffect, useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";
import "./App.css";

function App() {
  useEffect(() => {
    Chatbot.addResponses({ baroud: "baroud baroudian niggarov" });
    localStorage.setItem("message", JSON.stringify(ChatMessages));
  }, []);

  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [
      {
        message: "hello chatbot",
        sender: "user",
        id: "id1",
      },
      {
        message: "Hello! How can I help you?",
        sender: "robot",
        id: "id2",
      },
      {
        message: "can you get me todays date?",
        sender: "user",
        id: "id3",
      },
      {
        message: "Today is September 27",
        sender: "robot",
        id: "id4",
      },
    ]
  );
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];
  function clearMessages() {
    setChatMessages([]);
  }

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        onClear={clearMessages}
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
