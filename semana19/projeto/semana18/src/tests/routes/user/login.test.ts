import { UserBusiness } from "../../../business/UserBusiness";
import { User, SYSTEM_ROLE } from "../../../model/User";

describe("testing login endpoint", () => {
  let userDatabase: any = {};

  let hashGenerator: any = {};

  let tokenGenerator: any = {};

  let idGenerator: any = {};

  test("testing a normal login", async () => {
    const userInfo = jest.fn(() => {
      return new User(
        "random id",
        "Morty Sanchez",
        "morty@sanchez",
        "hash",
        SYSTEM_ROLE.NORMAL
      );
    });

    userDatabase = { userInfo };

    const compareHash = jest.fn(() => true);
    hashGenerator = { compareHash };

    const generate = jest.fn(() => "token");
    tokenGenerator = { generate };

    const user = {
      email: "morty@sanchez.com",
      password: "123456",
    };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );
    const result = await userBusiness.login(user.email, user.password);

    expect(result).toBe("token");
  });

  test("testing login with missing password", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      const result = await userBusiness.login("email", "");
    } catch (e) {
      expect(e.errorCode).toBe(422);
      expect(e.message).toBe("You need both parameters to log in!");
    }
  });

  test("testing login with missing email", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      const result = await userBusiness.login("", "123456");
    } catch (e) {
      expect(e.errorCode).toBe(422);
      expect(e.message).toBe("You need both parameters to log in!");
    }
  });

  test("testing login with wrong password", async () => {
    const userInfo = jest.fn(() => {
      return new User(
        "random id",
        "Morty Sanchez",
        "morty@sanchez",
        "hash",
        SYSTEM_ROLE.NORMAL
      );
    });

    userDatabase = { userInfo };

    const compareHash = jest.fn(() => false);
    hashGenerator = { compareHash };

    const generate = jest.fn(() => "token");
    tokenGenerator = { generate };

    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      const user = {
        email: "morty@sanchez.com",
        password: "123456",
      };

      const result = await userBusiness.login(user.email, user.password);
    } catch (e) {
      expect(compareHash).toHaveBeenCalledWith("123456", "hash");
      expect(e.errorCode).toBe(422);
      expect(e.message).toBe("Invalid password");
    }
  });
});
