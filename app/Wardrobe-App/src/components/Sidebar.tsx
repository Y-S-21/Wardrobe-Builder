const Sidebar = ({ setPage }: { setPage: (p: string) => void }) => {
  return (
    <div className="w-48 h-full bg-gray-900 text-white flex flex-col p-4 gap-4">
      <button onClick={() => setPage("wardrobe")}>Wardrobe</button>
      <button onClick={() => setPage("outfit")}>Outfit Builder</button>
      <button onClick={() => setPage("suggestions")}>AI Suggestions</button>
      <button onClick={() => setPage("settings")}>Settings</button>
    </div>
  );
};

export default Sidebar;
