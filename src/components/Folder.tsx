import React, { useState } from "react";
import { FolderType, FileType } from "../types";
import File from "./File";

interface FolderProps {
  folder: FolderType;
  selectedFile: FileType | null;
  setSelectedFile: (file: FileType | null) => void;
}

const Folder: React.FC<FolderProps> = ({ folder, selectedFile, setSelectedFile }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <div className="folder">
      <span onClick={handleToggle} className="folder-icon">
      📁 {folder.name}
      </span>

      {expanded && (
        <div className="folder-content">
          {folder.data.map((item, index) =>
            item.type === "folder" ? (
              <Folder
                key={index}
                folder={item as FolderType}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            ) : (
              <File
                key={index}
                file={item as FileType}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
