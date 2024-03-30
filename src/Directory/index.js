import { useReducer } from "react";
import { initialState } from "./state";
import reducer from "./state/reducer";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { ACTION_TYPES, NODE_TYPES } from "./constant";
import { toggleContentVisibility, createNode } from "./state/actions";
import ExplorerControls from "./controls";
import FileExplorerNodes from "./fileNodes";

const FileDirectory = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleExplorerControlOptionsClick = (actionType) => {
    let type = NODE_TYPES.File;

    if (actionType === "createFolder") {
      type = NODE_TYPES.Folder;
    }

    dispatch(createNode({ type }));
  };
  return (
    <section className="directory">
      <div className="header">
        <div
          className="title"
          onClick={() => dispatch(toggleContentVisibility())}
        >
          {state.showContents ? <FaChevronDown /> : <FaChevronRight />}
          <p>Files</p>
          <ExplorerControls onAction={handleExplorerControlOptionsClick} />
        </div>
      </div>
      {state.showContents ? (
        <div className="nodesWrapper">
          <FileExplorerNodes nodes={state.nodes} dispatch={dispatch} />
        </div>
      ) : null}
    </section>
  );
};

export default FileDirectory;
