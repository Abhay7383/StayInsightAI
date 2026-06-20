function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          StayInsight AI
        </h1>

        <span className="bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
          Guest Review Analyzer
        </span>
      </div>
    </nav>
  );
}

export default Navbar;