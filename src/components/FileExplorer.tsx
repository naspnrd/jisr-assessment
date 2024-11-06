import React, { useState } from 'react';
import { FolderType, FileType } from '../types';
import '../App.css';
import Folder from './Folder';

interface FileExplorerProps {
  explorer: FolderType;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ explorer }) => {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);

  return (
    <div className="file-explorer">
      <Folder folder={explorer} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
    </div>
  );
};

export default FileExplorer;
