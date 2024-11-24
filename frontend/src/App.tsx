import React, { useState } from "react";

const App: React.FC = () => {
  const [input, setInput] = useState<string>(""); // 入力メッセージ
  const [response, setResponse] = useState<string>(""); // Flaskからの応答

  // メッセージ送信処理
  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      // CORSエラー備考
      // エンドポイントがlocalhostの場合CORSエラー発生、127.0.0.1で疎通が確認できた。
      const res = await fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.reply);
      } else {
        setResponse("Error: Unable to get response from server.");
        console.error("Server Error:", data);
      }
    } catch (error) {
      setResponse("Error: Unable to connect to server.");
      console.error("Request failed:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React & Flask Chat</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ width: "300px", padding: "10px", marginRight: "10px" }}
        />
        <button onClick={handleSend} style={{ padding: "10px" }}>
          Send
        </button>
      </div>
      <div style={{ marginTop: "20px", color: "blue" }}>
        <strong>Response:</strong> {response}
      </div>
    </div>
  );
};

export default App;
