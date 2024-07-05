"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ChatPage({ params }: { params: any }) {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  useEffect(() => {
    const socket = new WebSocket(
      `ws://localhost:8000/ws/${params.id}/${username}`
    );
    setSocket(socket);

    socket.onopen = () => {
      console.log("connected");
    };

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socket.onerror = (event) => {
      console.error("WebSocket error:", event);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, [params.id]);

  const sendMessage = () => {
    if (socket && inputMessage.trim()) {
      socket.send(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div>
      <h1>Chat Room {params.id}</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
