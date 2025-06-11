import { Routes, Route, useLocation } from "react-router-dom";
import Chat from "./components/pages/Chat";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AuthRoute from "./components/pages/AuthRoute";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/auth");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth/*" element={<AuthRoute />} />
      </Routes>
    </>
  );
}

export default App;
