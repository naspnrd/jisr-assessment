// src/types.ts
export interface FileType {
    type: 'file';
    name: string;
    meta: string;
  }
  
  export interface FolderType {
    type: 'folder';
    name: string;
    data: (FileType | FolderType)[];
  }
  
  export type ExplorerType = FolderType | FileType;
  