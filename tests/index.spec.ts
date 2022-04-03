import { test, describe, expect } from "vitest";
import Impressum from "../src/pages/Impressum.mdx";

describe("imprint page", () => {
  test("stub default layout", () => {
    expect(Impressum.title).toMatchSnapshot();
  });
});
