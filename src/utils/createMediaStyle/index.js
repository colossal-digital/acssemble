import { breakpointsToArray } from "../breakpointsToArray";
import { breakpoints } from "../../breakpoints";

const normalizeCSSValue = value =>
  typeof value === "number" ? `${value}em` : value || "0";

const hasValue = value => ![null, undefined, NaN].includes(value);

const replaceValue = (str, value, index) => {
  if (!hasValue(value)) {
    return "";
  }
  return str.replace(
    new RegExp(`\\{${index}\\}`, "gmi"),
    normalizeCSSValue(value)
  );
};

export const createMediaStyle = (str, ...props) => {
  const mediaSizes = Object.values(breakpoints);
  return props.reduce((css, values, index) => {
    if (!hasValue(values)) {
      return css;
    }

    if (!(values instanceof Array) && typeof values === "object") {
      values = breakpointsToArray(breakpoints).map(([key]) => values[key]);
    }

    if (Array.isArray(values)) {
      return values.reduce((mediaStyles, value, i) => {
        if (mediaSizes[i] && hasValue(value)) {
          return `
${mediaStyles}

@media(min-width: ${mediaSizes[i]}px) {
  ${replaceValue(css, value, index)}
}
`;
        }
        return mediaStyles;
      }, replaceValue(css, values[0], index));
    }
    return replaceValue(css, values, index);
  }, str);
};
