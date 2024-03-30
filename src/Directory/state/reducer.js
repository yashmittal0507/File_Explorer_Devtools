import { ACTION_TYPES } from "../constant";

const findNodeAndUpdate = (nodes, nodeToMatch, callback) => {
  for (let i = 0; i < nodes.length; i++) {
    let currentNode = nodes[i];
    if (currentNode.id === nodeToMatch) {
      callback({
        currentNode,
        currentIndex: i,
      });
      break;
    } else if (currentNode.type === "folder") {
      findNodeAndUpdate(currentNode.children, nodeToMatch, callback);
    }
  }
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_CONTENT_VISIBILITY: {
      return {
        ...state,
        showContents: !state.showContents,
      };
    }
    case ACTION_TYPES.CREATE_NODE: {
      return {
        ...state,
        nodes: [...state.nodes, action.payload],
      };
    }

    case ACTION_TYPES.ADD_NODE_CHILDREN: {
      const clonedNodes = structuredClone(state.nodes);
      const { parentId, ...node } = action.payload;
      findNodeAndUpdate(clonedNodes, parentId, ({ currentNode }) => {
        currentNode.children.push(node);
      });
      return {
        ...state,
        nodes: clonedNodes,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
