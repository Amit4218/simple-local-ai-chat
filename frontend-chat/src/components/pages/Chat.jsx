import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Chat = () => {
  const [input, setInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const navigate = useNavigate();

  const sendMessage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/ai/generate`,
        { prompt: input }, // ← pass the prompt in the body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAiResponse(res.data.message);
    } catch (err) {
      alert("Something went wrong with AI");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">AI Chat</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <form onSubmit={sendMessage} className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="w-full border p-2 rounded"
          name="prompt"
        />
        <button type="submit" className="bg-indigo-500 text-white p-2 rounded">
          Send
        </button>
      </form>

      {aiResponse && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow">
          <p>
            <strong>AI:</strong> {aiResponse}
          </p>
        </div>
      )}
    </div>
  );
};

export default Chat;
