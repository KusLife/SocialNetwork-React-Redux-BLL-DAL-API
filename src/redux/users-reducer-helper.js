export const updateObjectHellper = (items, itemId, objPropName, newObjProp) => {
  return items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProp };
    }
    return u;
  });
};
