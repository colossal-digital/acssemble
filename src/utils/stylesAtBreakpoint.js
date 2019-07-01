import { css } from "emotion";
import { breakpoints } from "../breakpoints";

export const stylesAtBreakpoint = obj => css`
  ${Object.entries(obj).reduce(
    (str, [key, value]) =>
      str + breakpoints[key] !== undefined
        ? `@media(min-width: ${breakpoints[key]}px) {
            ${value};
           }`
        : "",
    ""
  )}
`;
