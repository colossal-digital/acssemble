const populateAllValues = values => {
  switch (values.length) {
    case 1:
      return [values[0], values[0], values[0], values[0]];
    case 2:
      return [...values, ...values];
    case 3:
      return [...values, values[1]];
    default:
      return values;
  }
};

export const combineBoxValues = (...args) => {
  const indexes = args.filter((_, i) => i);

  if (indexes.length <= 0) {
    return undefined;
  }
  const baseValue = args.pop() || "0";
  const values = populateAllValues(baseValue.split(/\s/));

  return args.reduce(
    (str, value, i) => `${str} ${value || values[i] || baseValue}`,
    ""
  );
};
