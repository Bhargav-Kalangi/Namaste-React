import { Sum } from "../Sum";
test("testing sum function", () => {
  const result = Sum(4, 3);
  expect(result).toBe(7);
});
