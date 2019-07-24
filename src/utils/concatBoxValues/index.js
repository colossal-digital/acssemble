import { breakpointsToArray } from "../breakpointsToArray";
import { combineBoxValues } from "../combineBoxValues";
import { breakpoints } from "../../breakpoints";

export const concatBoxValues = (...values) => {
  const xs = [];
  const sm = [];
  const md = [];
  const lg = [];
  const xl = [];
  const collection = [xs, sm, md, lg, xl];

  values.forEach((value, i) => {
    if (Array.isArray(value)) {
      value.forEach((subValue, j) => {
        collection[j][i] = subValue;
      });
    } else if (value === Object(value)) {
      breakpointsToArray(breakpoints).forEach(([key], j) => {
        collection[j][i] = value[key];
      });
    } else {
      collection[i].push(value);
    }
  });

  const totalBreakpoints = values.reduce(
    (a, b = []) => (a.length > b.length ? a : b),
    []
  ).length;

  return Array(totalBreakpoints)
    .fill()
    .map((_, i) => combineBoxValues(...collection[i]));
};
