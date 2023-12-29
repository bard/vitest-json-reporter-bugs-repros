import { expect, test } from "@jest/globals";
import { buggyFunction } from "./index";

test("repro", () => {
  expect(buggyFunction()).toEqual(4);
});
