import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

function App() {
  const videoRef = useRef(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to backend");
      setConnected(true);
    });

    socket.on("message", (data) => {
      console.log("From backend:", data);
    });
  }, []);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    videoRef.current.srcObject = stream;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Presentation Coach</h2>

      <button onClick={startCamera}>Start Practice</button>

      <p>
        Backend status:{" "}
        <b style={{ color: connected ? "green" : "red" }}>
          {connected ? "Connected" : "Not Connected"}
        </b>
      </p>

      <video
        ref={videoRef}
        autoPlay
        muted
        style={{ width: "400px", marginTop: "20px" }}
      />
    </div>
  );
}

export default App;
