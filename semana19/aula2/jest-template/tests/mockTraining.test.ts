test("training jest.fn", () => {
  const mock = jest.fn(() => {
    const validateFighter = {
      name: "Kassandra",
      nickname: "Eaglebearer",
    };
    return true;
  });
});
test("creating a mock that returns true", () => {
  const mock = jest.fn(() => {
    return true;
  });
});
test("creating a morck that returns false", () => {
  const mock = jest.fn(() => {
    return false;
  });
});
