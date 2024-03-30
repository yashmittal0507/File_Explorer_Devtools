import { FaFile, FaFolder, FaTrash, FaPen } from "react-icons/fa";
import ExplorerControls from "./controls";
import { addNodeChildren } from "./state/actions";
import {
  ACTION_TYPES,
  NODE_TYPES,
  FILE_CONTROLS,
  FOLDER_CONTROLS,
} from "./constant";
import { useState } from "react";

const getFolderIcon = (type) => {
  switch (type) {
    case "file":
      return FaFile;
    case "folder":
      return FaFolder;
    default:
      return null;
  }
};
const getNodeConfig = (type) => {
  if (type === NODE_TYPES.File) {
    return { icon: FaFile, controls: FILE_CONTROLS };
  } else if (type === NODE_TYPES.Folder) {
    return { icon: FaFolder, controls: FOLDER_CONTROLS };
  }
};
const FileExplorerNode = ({
  type,
  attributes,
  id,
  isNew,
  level,
  name,
  children,
  dispatch,
}) => {
  console.log({ level }, { children });
  const [nodeName, setNodeName] = useState(name);
  const [isEdit, setIsEdit] = useState(isNew);
  const Icon = getNodeConfig(type)?.icon;
  const handleExplorerControlOptionsClick = (actionType) => {
    console.log("inside handleExplorerControlOptionsClick", type);
    if (
      type === NODE_TYPES.Folder &&
      (actionType === "createFile" || actionType === "createFolder")
    ) {
      return dispatch(
        addNodeChildren({
          parentId: id,
          type:
            actionType === "createFile" ? NODE_TYPES.File : NODE_TYPES.Folder,
        })
      );
    }

    if (actionType === "edit") {
      setIsEdit(true);
    }
    if (actionType === "remove") {
      dispatch(deleteNode({ id }));
    }
  };
  return (
    <div className="node" style={{ paddingLeft: `calc(${level}*1px+12px)` }}>
      <div className="inputBoxWrapper">
        <div className="entry">
          <Icon />
          {isEdit ? (
            <input
              type="text"
              value={nodeName}
              onChange={(e) => setNodeName(e.target.value)}
            />
          ) : (
            <p>{nodeName}</p>
          )}
        </div>
        <ExplorerControls
          {...getNodeConfig(type).controls}
          onAction={handleExplorerControlOptionsClick}
        />
      </div>
      {children && children.length > 0 ? (
        <div className="node_children">
          <FileExplorerNodes
            nodes={children}
            dispatch={dispatch}
            level={level + 1}
          />
        </div>
      ) : null}
    </div>
  );
};

const FileExplorerNodes = ({ nodes, level = 0, dispatch }) => {
  console.log({ nodes });
  return (
    <>
      {nodes.map((node) => (
        <FileExplorerNode
          key={node.id}
          {...node}
          level={level}
          dispatch={dispatch}
        />
      ))}
    </>
  );
};

export default FileExplorerNodes;
