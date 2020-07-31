import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LAMA_Users";

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.password,
        dbModel.role
      )
    );
  }

  public async signUp(user: User): Promise<void> {
    const id = user.getId();
    const name = user.getName();
    const email = user.getEmail();
    const password = user.getPassword();
    const role = user.getRole();

    await this.getConnection()
      .insert({
        id,
        name,
        email,
        password,
        role,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async userInfo(email: string): Promise<User | undefined> {
    const user = await this.getConnection().raw(`
    SELECT * FROM ${UserDatabase.TABLE_NAME} WHERE email = "${email}"
    `);

    return this.toModel(user[0][0]);
  }
}
