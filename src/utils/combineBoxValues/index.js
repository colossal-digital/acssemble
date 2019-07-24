const populateAllValues = values => {
  switch (values.length) {
    case 0:
      return ["0", "0", "0", "0"];
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

const numberToUnit = value => {
  if (typeof value === "number" && !Number.isNaN(value)) {
    return `${value}em`;
  }
  if (typeof value === "string") {
    return value || "0em";
  }
  return "0em";
};

export const combineBoxValues = (baseValue, ...args) => {
  const values = populateAllValues(numberToUnit(baseValue).split(/\s/));

  return values.reduce((str, value, i) => {
    const v = numberToUnit(args[i] || value || baseValue);
    return str ? `${str} ${v}` : v;
  }, "");
};
