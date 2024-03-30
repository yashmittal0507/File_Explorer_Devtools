import { ACTION_TYPES } from "../constant";
import { getNodeType } from "./utils";

export const createNode = ({ type }) => {
  return {
    type: ACTION_TYPES.CREATE_NODE,
    payload: getNodeType(type),
  };
};

export const toggleContentVisibility = () => {
  return {
    type: ACTION_TYPES.TOGGLE_CONTENT_VISIBILITY,
  };
};

export const deleteNode = ({ id }) => {
  return {
    type: ACTION_TYPES.DELETE_NODE,
    payload: id,
  };
};

export const addNodeChildren = ({ parentId, type }) => {
  return {
    type: ACTION_TYPES.ADD_NODE_CHILDREN,
    payload: getNodeType(type, parentId),
  };
};
