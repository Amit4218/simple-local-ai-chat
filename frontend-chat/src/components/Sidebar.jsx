import { Settings, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [model, setModel] = useState("gemma3:1b");

  const sendMessage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/ai/generate`,
        { userPrompt: userInput, selectedModel: model },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAiResponse(res.data.message);
    } catch (err) {
      toast.error(err.message);
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
        {/* Response menu */}
        <div className="border my-3 rounded h-[65vh] p-4 overflow-y-auto">
          {/* ai response */}
          <div className="ai-response mb-4">
            <h3 className="text-sm font-medium mb-1">AI Response</h3>
            <div className="w-[60%] p-3 rounded-lg bg-zinc-900 text-gray-100">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, exercitationem!
              </p>
            </div>
          </div>
          {/* User input */}
          <div className="user-message ml-auto mb-4">
            <h3 className="text-sm font-medium mb-1 text-right">User</h3>
            <div className="w-[60%] p-3 rounded-lg bg-blue-600 text-white ml-auto">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, exercitationem!
              </p>
            </div>
          </div>
        </div>
        <div>
          <form
            onSubmit={sendMessage}
            className={`absolute bottom-5 ${
              expanded ? "w-[65%]" : "w-[70%]"
            } flex`}
          >
            <Input
              className="h-12 px-4"
              placeholder="Enter something..."
              onChange={(e) => {
                setUserInput(e.target.value);
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
            className={`bg-zinc-700 py-[0.60rem] -mb-1 rounded ${
              expanded ? "px-4" : "px-10 mx-5"
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
