import knex from "knex";

export class UserDatabase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.connection
      .insert({
        id,
        email,
        password,
      })
      .into("User");
  }

  public async userInfo(email: string): Promise<any> {
    const result = await this.connection
      .select("*")
      .from("User")
      .where({ email });

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.connection.select("*").from("User").where({ id });

    console.log("id:" + result[0]);
    return result[0];
  }
}
