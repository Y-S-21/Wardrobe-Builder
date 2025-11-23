import { useState } from "react";

import Sidebar from "./components/Sidebar";

import WardrobePage from "./pages/WardrobePage";
import OutfitBuilderPage from "./pages/OutfitBuilderPage";
import SuggestionsPage from "./pages/SuggestionsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  const [page, setPage] = useState("wardrobe");

  const renderPage = () => {
    switch (page) {
      case "wardrobe": return <WardrobePage />;
      case "outfit": return <OutfitBuilderPage />;
      case "suggestions": return <SuggestionsPage />;
      case "settings": return <SettingsPage />;
      default: return <WardrobePage />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar setPage={setPage} />
      <div className="flex-1 bg-gray-100 overflow-auto">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
