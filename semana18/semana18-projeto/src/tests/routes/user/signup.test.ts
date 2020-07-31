import { UserBusiness } from "../../../business/UserBusiness";
import { User } from "../../../model/User";

describe("testing signup endpoint", () => {
  let userDatabase: any = {
    signUp: jest.fn(async (user: User): Promise<void> => {}),
  };
  let hashGenerator: any = {
    hash: () => {
      return "cripted password";
    },
  };
  let tokenGenerator: any = {
    generate: () => {
      return "random token";
    },
  };
  let idGenerator: any = {
    generate: () => {
      return "random id";
    },
  };

  const userBusiness = new UserBusiness(
    userDatabase as any,
    hashGenerator as any,
    tokenGenerator as any,
    idGenerator as any
  );
  test("testing a normal user", async () => {
    const newUser = await userBusiness.signup(
      "Morty Sanchez",
      "morty@sanchez.com",
      "123456",
      "NORMAL"
    );

    expect(userDatabase.signUp).toHaveBeenCalled();
  });
  test("testing if it returns an error when there's an input missing", async () => {
    expect.assertions(2);
    try {
      const newUser = await userBusiness.signup(
        "",
        "morty@sanchez.com",
        "123456",
        "NORMAL"
      );
    } catch (e) {
      expect(e.errorCode).toBe(422);
      expect(e.message).toBe("There's an input missing");
    }
  });
  test("testing if it returns an error when there's no @ in the email", async () => {
    expect.assertions(2);
    try {
      const newUser = await userBusiness.signup(
        "Morty Sanchez",
        "mortysanchez.com",
        "123456",
        "NORMAL"
      );
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("Invalid email format");
    }
  });
  test("testing if it returns an error when there is no dots", async () => {
    expect.assertions(2);
    try {
      const newUser = await userBusiness.signup(
        "Morty Sanchez",
        "morty@sanchezcom",
        "123456",
        "NORMAL"
      );
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("Invalid email format");
    }
  });
  test("testing if it returns an error when the dot is not in the right place", async () => {
    expect.assertions(2);
    try {
      const newUser = await userBusiness.signup(
        "Morty Sanchez",
        "mor.ty@sanchezcom",
        "123456",
        "NORMAL"
      );
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("Invalid email format");
    }
  });
  test("testing if it returns an error when the password does not have enough characteres", async () => {
    expect.assertions(2);
    try {
      const newUser = await userBusiness.signup(
        "Morty Sanchez",
        "morty@sanchez.com",
        "1256",
        "NORMAL"
      );
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("Invalid password");
    }
  });
});
