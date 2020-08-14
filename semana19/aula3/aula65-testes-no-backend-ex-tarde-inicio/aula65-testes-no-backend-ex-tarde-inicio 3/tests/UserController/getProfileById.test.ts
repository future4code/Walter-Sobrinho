import { UserBusiness } from "../../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../../src/model/User";

describe("testing endpoint getProfileById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("testing if it returns an error when there are no matching ids", async () => {
    expect.assertions(2);
    try {
      const getProfileById = jest.fn();
      userDatabase = { getProfileById };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getProfileById("random id");
    } catch (e) {
      expect(e.errorCode).toBe(404);
      expect(e.message).toBe("User not found");
    }
  });

  test("testing request that should end in sucess", async () => {
    const getProfileById = jest.fn(
      (id: string) =>
        new User(
          "id",
          "Agnes Obel",
          "agnes@obel.com",
          "password",
          stringToUserRole("NORMAL")
        )
    );

    userDatabase = { getProfileById };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );
    const user = await userBusiness.getProfileById("id");

    expect(getProfileById).toHaveBeenCalledWith("id");
    expect(user).toEqual({
      id: "id",
      name: "Agnes Obel",
      email: "agnes@obel.com",
      role: UserRole.NORMAL,
    });
  });
});
