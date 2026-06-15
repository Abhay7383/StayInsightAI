function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          StayInsight AI
        </h1>

        <p className="hidden md:block">
          Guest Review Sentiment Analyzer
        </p>
      </div>
    </nav>
  );
}

export default Navbar;