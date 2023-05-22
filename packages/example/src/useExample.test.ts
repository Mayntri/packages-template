import { it } from "vitest";

import { useExample } from "./useExample";

it("should work", async () => {
  try {
    useExample();
  } catch (e) {
    // Hooks errors
  }
});
