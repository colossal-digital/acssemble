import { combineBoxValues } from "./";

const DEFAULT_VALUE = "0em 0em 0em 0em";

describe("combineBoxValues", () => {
  it("should convert non string and number values to default box value.", () => {
    expect(combineBoxValues()).toBe(DEFAULT_VALUE);
    expect(combineBoxValues(null)).toBe(DEFAULT_VALUE);
    expect(combineBoxValues(NaN)).toBe(DEFAULT_VALUE);
    expect(combineBoxValues([])).toBe(DEFAULT_VALUE);
    expect(combineBoxValues({})).toBe(DEFAULT_VALUE);
  });

  it("should return map 'all', top', 'right', 'bottom' and 'left' to their corresponding indexes.", () => {
    expect(combineBoxValues("1em 1em 1em 1em")).toBe("1em 1em 1em 1em");
    expect(combineBoxValues("", "1em")).toBe("1em 0em 0em 0em");
    expect(combineBoxValues("", "", "1em")).toBe("0em 1em 0em 0em");
    expect(combineBoxValues("", "", "", "1em")).toBe("0em 0em 1em 0em");
    expect(combineBoxValues("", "", "", "", "1em")).toBe("0em 0em 0em 1em");
  });
});
