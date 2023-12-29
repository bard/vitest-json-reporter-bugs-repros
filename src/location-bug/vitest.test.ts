import { expect, test } from "vitest";
import { buggyFunction } from "./index.js";

test("repro", () => {
  expect(buggyFunction()).toEqual(4);
});
