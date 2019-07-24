import { createMediaStyle } from "./";
import { breakpoints } from "../../breakpoints";

const mediaSizes = Object.values(breakpoints);

describe("createMediaStyle", () => {
  it("Will replace all template values with it's corresponding index", () => {
    expect(createMediaStyle("margin: {0};", "4rem")).toBe("margin: 4rem;");
    expect(createMediaStyle("margin: {0}; padding: {1};", "4rem", "2rem")).toBe(
      "margin: 4rem; padding: 2rem;"
    );
    expect(createMediaStyle("margin: {0}; padding: {0};", "4rem")).toBe(
      "margin: 4rem; padding: 4rem;"
    );
  });

  it("Will create a media query for all required breakpoints", () => {
    expect(createMediaStyle("margin: {0};", ["8px", "16px"])).toBe(
      `
margin: 8px;

@media(min-width: ${mediaSizes[1]}px) {
  margin: 16px;
}
`
    );
  });
});
