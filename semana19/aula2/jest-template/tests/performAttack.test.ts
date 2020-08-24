import Character from "../src/Character";
import { performAttack } from "../src/performAttack";
import { error } from "console";

describe("testing the performAttacka funcion with a mock for validateCharacter", () => {
  test("testing performAttack with two valid characters", () => {
    const mock = jest.fn(() => {
      return true;
    });

    const kassandra: Character = {
      name: "Kassandra",
      power: 800,
      life: 1000,
      defense: 800,
    };

    const alexios: Character = {
      name: "Alexios",
      power: 800,
      life: 1000,
      defense: 600,
    };

    const result = performAttack(kassandra, alexios, mock);

    expect(result.life).toBe(800);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveReturned();
  });
  test("testing with invalid characters", () => {
    const mock = jest.fn(() => {
      return false;
    });

    const kassandra: Character = {
      name: "Kassandra",
      power: 800,
      life: 1000,
      defense: 800,
    };

    const alexios: Character = {
      name: "Alexios",
      power: 800,
      life: 1000,
      defense: 800,
    };

    try {
      const result = performAttack(kassandra, alexios, mock);
      expect(mock).toHaveBeenCalledTimes(2);
    } catch (e) {
      expect(e.message).toBe("Invalid character");
    }
  });
  test("testing with equal values of power and defense", () => {
    const mock = jest.fn(() => {
      return true;
    });

    const kassandra: Character = {
      name: "Kassandra",
      power: 800,
      life: 1000,
      defense: 800,
    };

    const alexios: Character = {
      name: "Alexios",
      power: 800,
      life: 1000,
      defense: 800,
    };

    const result = performAttack(kassandra, alexios, mock);

    expect(result.life).toBe(1000);
  });
  test("testing with a bigger defense value in the defender", () => {
    const mock = jest.fn(() => {
      return true;
    });

    const kassandra: Character = {
      name: "Kassandra",
      power: 600,
      life: 1000,
      defense: 800,
    };

    const alexios: Character = {
      name: "Alexios",
      power: 800,
      life: 1000,
      defense: 800,
    };

    const result = performAttack(kassandra, alexios, mock);

    expect(result.life).toBe(1000);
  });
  test("testing a IK attack", () => {
    const mock = jest.fn(() => {
      return true;
    });

    const kassandra: Character = {
      name: "Kassandra",
      power: 1800,
      life: 1000,
      defense: 800,
    };

    const alexios: Character = {
      name: "Alexios",
      power: 800,
      life: 1000,
      defense: 800,
    };

    const result = performAttack(kassandra, alexios, mock);

    expect(result.life).toBe(0);
  });
});
