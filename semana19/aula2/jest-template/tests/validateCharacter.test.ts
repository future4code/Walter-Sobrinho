import Character from "../src/Character";
import { validateCharacter } from "../src/validateCharacter";

describe("tests on validateCharacter function", () => {
  test("testing if function properly denies empty names", () => {
    const kassandra: Character = {
      name: "",
      power: 10,
      life: 10,
      defense: 10,
    };

    const result = validateCharacter(kassandra);

    expect(result).toBeFalsy();
  });
  test("testing how the function works with a character with no hp", () => {
    const kassandra: Character = {
      name: "Kassandra",
      power: 10,
      life: undefined,
      defense: 10,
    };
    const result = validateCharacter(kassandra);

    expect(result).toBeFalsy();
  });
  test("testing how the function works with a no power character", () => {
    const kassandra: Character = {
      name: "Kassandra",
      power: undefined,
      life: 0,
      defense: 10,
    };
    const result = validateCharacter(kassandra);

    expect(result).toBeFalsy();
  });
  test("testing how the function works with a no defense character", () => {
    const kassandra: Character = {
      name: "Kassandra",
      power: 10,
      life: 10,
      defense: undefined,
    };
    const result = validateCharacter(kassandra);

    expect(result).toBeFalsy();
  });
  test("testing how the function works with a negative life character", () => {
    const kassandra: Character = {
      name: "Kassandra",
      power: 10,
      life: -10,
      defense: 10,
    };
    const result = validateCharacter(kassandra);

    expect(result).toBeFalsy();
  });
  test("testing a character with in one or more properties", () => {
    const kassandra: Character = {
      name: "Kassandra",
      power: 0,
      life: 10,
      defense: 10,
    };
    const result = validateCharacter(kassandra);

    expect(result).toBeTruthy();
  });
  test("testing a perfect character", () => {
    const kassandra: Character = {
      name: "Kassandra",
      power: 10,
      life: 10,
      defense: 10,
    };
    const result = validateCharacter(kassandra);

    expect(result).toBeTruthy();
  });
});
