export const isObjectNotEmpty = (state) => {
  //if (Object.keys(state).length === 0) return false;

  const objectValues = Object.values(state);
  return objectValues.every((item) => item !== "");
};
