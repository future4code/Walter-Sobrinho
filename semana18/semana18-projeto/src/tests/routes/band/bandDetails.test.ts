import { BandBusiness } from "../../../business/BandBusiness";

describe("testing the getDetails endpoint", () => {
  let bandDatabase = {};
  let idGenerator = {};
  let tokenGenerator = {};
  test("testing if if properly returns an error when there are missing parameters", async () => {
    expect.assertions(2);
    try {
      const data = {
        token: "token",
        info: "",
      };
      const bandBusiness = new BandBusiness(
        tokenGenerator as any,
        idGenerator as any,
        tokenGenerator as any
      );
      const band = await bandBusiness.bandInfo(data.token, data.info);
    } catch (error) {
      expect(error.errorCode).toBe(422);
      expect(error.message).toBe("The search requires at least one parameter");
    }
  });
});
