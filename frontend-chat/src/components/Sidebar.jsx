import { Home, Settings, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [input, setInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [model, setModel] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/ai/generate`,
        { prompt: input },
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

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const navItems = [{ icon: <Settings size={20} />, label: "Settings" }];

  return (
    <div className={`flex h-[85vh] mt-2 rounded-md`}>
      <div
        className={`transition-all duration-300 bg-zinc-900 text-white ${
          expanded ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <span className={`text-md font-bold ${!expanded && "hidden"}`}>
            Local Chat LLm
          </span>
          <Button
            variant="ghost"
            className="text-white p-2"
            onClick={toggleSidebar}
          >
            <Menu />
          </Button>
        </div>

        <nav className="mt-4 space-y-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer"
            >
              {item.icon}
              {expanded && <span className="ml-3">{item.label}</span>}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex-1  p-6">
        {/* Main Content */}
        <h1 className="text-2xl font-semibold text-center">Welcome To Chat </h1>
        <div className="">
          <form
            onSubmit={sendMessage}
            className={`absolute bottom-5 w-[${expanded ? "65%" : "70%"}] flex`}
          >
            <Input
              className="h-12 px-4"
              placeholder="Enter something..."
              onChage={(e) => {
                setInput(e.target.value);
              }}
            />
            <FaPaperPlane
              onClick={sendMessage}
              className="size-[1.5rem] absolute right-5 mt-3 cursor-pointer"
            />
          </form>
        </div>
        <div className="absolute bottom-7 right-7">
          <div
            className={`bg-zinc-700 py-[0.60rem] -mb-1 rounded px-${
              expanded ? "4" : "10"
            } `}
          >
            <select
              id="models"
              name="models"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
            >
              <option value="select_model">select a model</option>
              <option value="gemma">Gemma3:1b</option>
              <option value="llava">llava:7b</option>
              <option value="ollama">ollama3:latest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
