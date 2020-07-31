import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
  private static TABLE_NAME = "LAMA_Bands";

  private toModel(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.music_genre,
        dbModel.responsible
      )
    );
  }

  public async newBand(input: Band): Promise<void> {
    const id = input.getId();
    const name = input.getName();
    const music_genre = input.getMusicGenre();
    const responsible = input.getResponsible();

    await this.getConnection().raw(`
    INSERT INTO ${BandDatabase.TABLE_NAME} VALUES (
      "${id}",
      "${name}",
      "${music_genre}",
      "${responsible}"
    )
    `);
  }

  public async bandDetails(input: string): Promise<Band | undefined> {
    const result = await this.getConnection().raw(`
    SELECT * FROM ${BandDatabase.TABLE_NAME} WHERE name = "${input}" OR id = "${input}"
    `);

    return this.toModel(result[0][0]);
  }
}
