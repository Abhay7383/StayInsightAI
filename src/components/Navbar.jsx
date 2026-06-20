function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        StayInsight AI
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

    </nav>
  );
}

export default Navbar;