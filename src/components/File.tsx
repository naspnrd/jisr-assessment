import React, { useState, useRef, useEffect } from "react";
import { FileType } from "../types";

interface FileProps {
  file: FileType;
  selectedFile: FileType | null;
  setSelectedFile: (file: FileType | null) => void;
}

const File: React.FC<FileProps> = ({ file, selectedFile, setSelectedFile }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement | null>(null);

  const isSelected = selectedFile === file;

  const handleLeftClick = () => {
    setSelectedFile(isSelected ? null : file); 
    setShowMenu(false);
  };

  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setSelectedFile(file);
    setShowMenu(true);
  };

  const handleMenuAction = (action: string) => {
    console.log(`${action} action on file: ${file.name}`);
    setShowMenu(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`file ${isSelected ? "selected" : ""}`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      📄 {file.name}

      {showMenu && (
        <div
          ref={menuRef}
          className="context-menu"
          style={{ top: menuPosition.y, left: menuPosition.x }}
        >
          <div onClick={() => handleMenuAction("copy")}>Copy</div>
          <div onClick={() => handleMenuAction("delete")}>Delete</div>
          <div onClick={() => handleMenuAction("rename")}>Rename</div>
        </div>
      )}
    </div>
  );
};

export default File;