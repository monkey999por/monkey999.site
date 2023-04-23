import { sum, throwAnything } from "./jestSample";

test("should first", () => {
  expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
  const data: { [key: string]: string | number } = { one: 1 };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

test("isNull", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).not.toBeUndefined();
});

test("Throws", () => {
  expect(() => throwAnything()).toThrow("anything error");
});
