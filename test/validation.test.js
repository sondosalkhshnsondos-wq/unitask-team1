Const { test, expect } = require(‘@jest/globals’);

Test(‘should fail for empty task’, () => {
  Const value = “”;
  Const result = value.trim() !== “”;
  Expect(result).toBe(false);
});

Test(‘should pass for valid task’, () => {
  Const value = “Study”;
  Const result = value.trim() !== “”;
  Expect(result).toBe(true);
});

