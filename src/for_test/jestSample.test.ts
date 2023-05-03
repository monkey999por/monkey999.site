import { expect, test } from "@jest/globals";

import { forEach, sum, throwAnything } from "./jestSample";

// test.onlyにするとこいつだけ実行される
// 基本的な使い方としては、失敗したテストにonlyつけて再テストしてみるとか（他のテストの影響を受けていないかの確認）
// beforeAll, beforeEachなんかを使ってるとそういうことがあるかも
// 参考：https://jestjs.io/ja/docs/setup-teardown
test.only("should first", () => {
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

/**
 * mock sample
 */
const mockCallback = jest.fn((x) => 42 + x);

test("forEach mock func", () => {
  forEach([0, 1], mockCallback);
});
