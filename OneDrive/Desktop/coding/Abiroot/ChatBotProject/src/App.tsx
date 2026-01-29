import { useState } from "react";
import { ChatInput } from "./components/chatInput";
import { ChatMessages } from "./components/ChatMessage";
function App() {
  const [chatmessages, setChatMessages] = useState<
    { message: string; sender: string }[]
  >([]);
  return (
    <>
      <ChatMessages chatmessages={chatmessages} />
      <ChatInput
        chatmessages={chatmessages}
        setChatMessages={setChatMessages}
      />
    </>
  );
}

export default App;
