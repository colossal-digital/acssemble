export const breakpointsToArray = obj =>
  Object.entries(obj).sort((a, b) => (a[1] > b[1] ? 1 : -1));
