export const getNodeType = (type, parentId?) => {
  const attributes = {
    id: +new Date(),
    name: "",
    type,
    isNew: true,
    parentId,
  };

  if (type === "folder") {
    attributes.children = [];
  }

  return attributes;
};
