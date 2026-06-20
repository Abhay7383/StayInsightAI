import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Home darkMode={darkMode} />
    </div>
  );
}

export default App;