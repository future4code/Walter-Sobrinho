import { ConcertsBusiness } from "../../../business/ConcertBusiness";

describe("testing the newConcert endpoint", () => {
  let tokenGenerator: any = {};

  let idGenerator: any = {};

  let concertDatabase: any = {};

  let bandDatabase: any = {};
  test("testing unauthorized user", async () => {
    const verify = jest.fn(() => {
      return false;
    });

    tokenGenerator = { verify };

    const generate = jest.fn(() => {
      return "random id";
    });

    idGenerator = { generate };
    expect.assertions(2);
    try {
      const concertBusiness = new ConcertsBusiness(
        concertDatabase as any,
        bandDatabase as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await concertBusiness.newConcert("token", "day", 10, 20, "jethro tull");
    } catch (error) {
      expect(error.errorCode).toBe(401);
      expect(error.message).toBe("You do not have permission to do that!");
    }
  });

  test("testing missing parameters", async () => {
    const verify = jest.fn(() => {
      const user = {
        role: "ADMIN",
      };
      return user;
    });

    tokenGenerator = { verify };

    const generate = jest.fn(() => {
      return "random id";
    });

    idGenerator = { generate };
    expect.assertions(2);
    try {
      const concertBusiness = new ConcertsBusiness(
        concertDatabase as any,
        bandDatabase as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await concertBusiness.newConcert("token", "", 10, 20, "jethro tull");
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("There are parameters missing");
    }
  });

  test("testing invalid week day", async () => {
    const verify = jest.fn(() => {
      const user = {
        role: "ADMIN",
      };
      return user;
    });

    tokenGenerator = { verify };

    const generate = jest.fn(() => {
      return "random id";
    });

    idGenerator = { generate };
    expect.assertions(2);
    try {
      const concertBusiness = new ConcertsBusiness(
        concertDatabase as any,
        bandDatabase as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await concertBusiness.newConcert(
        "token",
        "monday",
        10,
        20,
        "jethro tull"
      );
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe(
        "The event occurs only between friday and sunday."
      );
    }
  });

  test("testing invalid time", async () => {
    const verify = jest.fn(() => {
      const user = {
        role: "ADMIN",
      };
      return user;
    });

    tokenGenerator = { verify };

    const generate = jest.fn(() => {
      return "random id";
    });

    idGenerator = { generate };
    expect.assertions(2);
    try {
      const concertBusiness = new ConcertsBusiness(
        concertDatabase as any,
        bandDatabase as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await concertBusiness.newConcert(
        "token",
        "friday",
        1030,
        20,
        "jethro tull"
      );
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("You can only use full hours");
    }
  });

  test("testing times that exceed the maximum prescibed", async () => {
    const verify = jest.fn(() => {
      const user = {
        role: "ADMIN",
      };
      return user;
    });

    tokenGenerator = { verify };

    const generate = jest.fn(() => {
      return "random id";
    });

    idGenerator = { generate };
    expect.assertions(2);
    try {
      const concertBusiness = new ConcertsBusiness(
        concertDatabase as any,
        bandDatabase as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await concertBusiness.newConcert(
        "token",
        "friday",
        100,
        2500,
        "jethro tull"
      );
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe(
        "The festival happens only between 8h and 24h."
      );
    }
  });
});
