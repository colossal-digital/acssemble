import { breakpoints } from "../breakpoints";

const isLowestBreakpoint = value => parseFloat(value) <= 0;

const normalizeCSSValue = value =>
  typeof value === "number" ? `${value}px` : value;

const styleFactory = str => value => {
  const values = Array.isArray(value) ? value : [value];
  return values.reduce(
    (styles, v, i) => styles.replace(`{${i}}`, normalizeCSSValue(v)),
    str
  );
};

export const createMediaStyle = (str, props = []) => {
  const mediaSizes = Object.values(breakpoints);
  const createStyle = styleFactory(str);
  let values = props;

  if (!(values instanceof Array) && typeof values === "object") {
    values = Object.keys(breakpoints).map(key => values[key]);
  }

  if (Array.isArray(values)) {
    return values.map((value, i) => {
      if (mediaSizes[i] === undefined) {
        return "";
      }
      if (isLowestBreakpoint(mediaSizes[i])) {
        return createStyle(value);
      }
      return `
          @media(min-width: ${mediaSizes[i]}px) {
            ${createStyle(value)};
          }
        `;
    });
  } else {
    return createStyle(values);
  }
};
