import { FaFile, FaFolder, FaTrash, FaPen } from "react-icons/fa";
import PropTypes from "prop-types";
const ExplorerControls = ({
  canRename,
  canRemove,
  canCreateFile,
  canCreateFolder,
  onAction,
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    const { currentTarget } = e;
    const actionName = currentTarget.getAttribute("data-action");
    onAction(actionName);
  };
  return (
    <div className="controls">
      {canRename ? (
        <span data-action="edit" onClick={handleClick}>
          <FaPen />
        </span>
      ) : null}
      {canRemove ? (
        <span data-action="remove" onClick={handleClick}>
          <FaTrash />
        </span>
      ) : null}
      {canCreateFile ? (
        <span data-action="createFile" onClick={handleClick}>
          <FaFile />
        </span>
      ) : null}
      {canCreateFolder ? (
        <span data-action="createFolder" onClick={handleClick}>
          <FaFolder />
        </span>
      ) : null}
    </div>
  );
};

ExplorerControls.propTypes = {
  canRename: PropTypes.bool,
  canRemove: PropTypes.bool,
  canCreateFile: PropTypes.bool,
  canCreateFolder: PropTypes.bool,
  onAction: PropTypes.func,
};

ExplorerControls.defaultProps = {
  canRename: false,
  canRemove: false,
  canCreateFile: true,
  canCreateFolder: true,
  onAction: () => {},
};

export default ExplorerControls;
