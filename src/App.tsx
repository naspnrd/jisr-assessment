import React, { useState } from "react";
import Folder from "./components/Folder";
import { FolderType, FileType } from "./types";
import { explorerData } from "./data/explorerData";
import "./App.css";

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);

  return (
    <div className="app">
      <Folder
        folder={explorerData as FolderType}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
    </div>
  );
};

export default App;
