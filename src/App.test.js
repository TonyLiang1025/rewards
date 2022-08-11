const calRew = require("./calRew");

describe("calculate reward points", () => {
  it("should calculate amount 51 to get 1 reward points", () => {
    const result = calRew(51);
    expect(result).toBe(1);
  });

  it("should calculate amount 100 to get 50 reward points", () => {
    const result = calRew(100);
    expect(result).toBe(50);
  });

  it("should calculate amount 120 to get 90 reward points", () => {
    const result = calRew(120);
    expect(result).toBe(90);
  });
});
