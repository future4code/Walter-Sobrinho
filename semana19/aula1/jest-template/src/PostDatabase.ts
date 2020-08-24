import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "NewPosts";

  public async createPost(
    id: string,
    photo: string,
    description: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        photo,
        description,
      })
      .into(PostDatabase.TABLE_NAME);
  }
  public async getPostById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async cleanTable(): Promise<any> {
    await this.getConnection()(PostDatabase.TABLE_NAME).truncate();
  }
}
