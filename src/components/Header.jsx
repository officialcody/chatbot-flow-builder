const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center px-20 py-6 bg-[#f3f3f3] border-b-2 border-gray-400">
      <h1 className="text-2xl font-medium">Chatbot Flow Builder</h1>
      <button className="flex items-center px-2 py-2 mx-6 text-sm text-blue-500 border-2 border-blue-500 rounded-lg font-medium transition-all hover:bg-blue-500/10 active:scale-95 active:bg-blue-500/30">
        Save Changes
      </button>
    </header>
  );
};

export default Header;
