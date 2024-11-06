import React, { useState } from "react";
import { explorerData } from "./data/explorerData";
import Folder from "./components/Folder";
import { FileType } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);

  return (
    <div className="app">
      <Folder
        folder={explorerData}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
    </div>
  );
};

export default App;
