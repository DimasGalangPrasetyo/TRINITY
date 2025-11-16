import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/ping")
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg("Error connecting to backend"));
  }, []);

  return (
    <div className="p-4 text-xl">
      React Frontend — {msg}
    </div>
  );
}
