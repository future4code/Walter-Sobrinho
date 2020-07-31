import { BandBusiness } from "../../../business/BandBusiness";

describe("testing the newBand endpoint", () => {
  let idGenerator = {};

  let bandDatabase = {};

  let tokenGenerator = {
    verify: jest.fn(() => {
      const user = {
        id: "random",
        role: "NORMAL",
      };
      return user;
    }),
  };

  test("testing an entry with missing name", async () => {
    expect.assertions(2);
    try {
      const bandBusiness = new BandBusiness(
        idGenerator as any,
        tokenGenerator as any,
        bandDatabase as any
      );

      await bandBusiness.newBand("token", "", "Jazz Rock", "Walter Becker");
    } catch (e) {
      expect(e.errorCode).toBe(422);
      expect(e.message).toBe("You need all parameters to log in!");
    }
  });

  test("testing an entry with missing genre", async () => {
    expect.assertions(2);
    try {
      const bandBusiness = new BandBusiness(
        idGenerator as any,
        tokenGenerator as any,
        bandDatabase as any
      );

      await bandBusiness.newBand("token", "Steely Dan", "", "Walter Becker");
    } catch (e) {
      expect(e.errorCode).toBe(422);
      expect(e.message).toBe("You need all parameters to log in!");
    }
  });

  test("testing an entry with missing responsible", async () => {
    expect.assertions(2);
    try {
      const bandBusiness = new BandBusiness(
        idGenerator as any,
        tokenGenerator as any,
        bandDatabase as any
      );

      await bandBusiness.newBand("token", "Steely Dan", "Jazz Rock", "");
    } catch (e) {
      expect(e.errorCode).toBe(422);
      expect(e.message).toBe("You need all parameters to log in!");
    }
  });

  test("testing an entry with no authorization", async () => {
    expect.assertions(2);
    try {
      const bandBusiness = new BandBusiness(
        idGenerator as any,
        tokenGenerator as any,
        bandDatabase as any
      );

      await bandBusiness.newBand(
        "token",
        "Steely Dan",
        "Jazz Rock",
        "Walter Becker"
      );
    } catch (e) {
      expect(e.errorCode).toBe(401);
      expect(e.message).toBe("You do not have permission to do that!");
    }
  });
});
