import { UserBusiness } from "../../src/business/UserBusiness";
import { UserRole } from "../../src/model/User";

describe("testing getAllUsers endpoint", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("testing if the authorization works properly", async () => {
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );
      await userBusiness.getAllUsers(UserRole.NORMAL);
    } catch (e) {
      expect(e.errorCode).toBe(400);
      expect(e.message).toBe(
        "You do not have authorization to make this request"
      );
    }
  });
});
