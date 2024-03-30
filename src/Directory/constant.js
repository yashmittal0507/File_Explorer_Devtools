export const NODE_TYPES = {
  File: "file",
  Folder: "folder",
};

export const FILE_CONTROLS = {
  canRename: true,
  canRemove: true,
  canCreateFile: false,
  canCreateFolder: false,
};

export const FOLDER_CONTROLS = {
  canRename: true,
  canRemove: true,
  canCreateFile: true,
  canCreateFolder: true,
};

export const ACTION_TYPES = {
  TOGGLE_CONTENT_VISIBILITY: "TOGGLE_CONTENT_VISIBILITY",
  CREATE_NODE: "CREATE_NODE",
  DELETE_NODE: "DELETE_NODE",
  ADD_NODE_CHILDREN: "ADD_NODE_CHILDREN",
};
