### EXERCICIO 1
#### a.
O resultado vem num array de arrays e objetos, com os dados do DB
#### b.
const getActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE name="${name}"`);
  console.log(result[0]);
  return result;
};
#### c.
const genderByNumber = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
`);
  console.log(result[0]);
  return result;
};

### EXERCICIO 2
#### a.
const updateSalary = async (salary: number, id: string): Promise<void> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
#### b.
const deleteActor = async (id: string) => {
  await connection("Actor").delete().where("id", id);
};
#### c.
const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where("gender", gender);

  return result[0];
};

### EXERCICIO 3
#### a.
O req recebe informações que vêm para o back end, e o req retira essa informação, no caso, o ID, do route da page.
#### b.
Enviam, respectivamente, mensagens de sucesso e erro para o front end.
#### c.
const getActorCount = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) FROM Actor WHERE gender= "${gender}"`);
  console.log(result);
  return result[0];
};

app.get("/actor", async function (req: Request, res: Response) {
  try {
    const actors = await getActorCount(req.query.gender as string);

    res.status(200).send({ actors });
  } catch (err) {
    res.status(400).send(err.message);
  }
});
### EXERCICIO 4
#### a.
const setSalary = async (id: string, salary: number): Promise<any> => {
  connection("Actors").where("id", id).update({ salary: salary });
};

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await setSalary(req.body.id, req.body.salary);

    res.status(200).send({
      message: "Salário atualizado",
    });
  } catch (err) {
    res.status(400).send({
      message: "Houve um erro",
    });
  }
});
#### b.
const deleteActor = async (id: string): Promise<any> => {
  connection("Actors").delete().where("id", id);
};

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.body.id);

    res.status(200).send({
      message: "Ator deletado",
    });
  } catch (err) {
    res.status(400).send({
      message: "Houve um erro",
    });
  }
});
### EXERCICIO 5
const createFilm = async (
  nome: string,
  id: number,
  sinopse: string,
  lancamento: Date,
  playing_limit_date: Date
) => {
  await connection
    .insert({
      nome: nome,
      id: id,
      sinopse: sinopse,
      lancamento: lancamento,
      playing_limit_date: playing_limit_date,
    })
    .into("Filmes");
};

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createFilm(
      req.body.nome,
      req.body.id,
      req.body.sinopse,
      req.body.lancamento,
      req.body.playing_limit_date
    );

    res.status(200).send({
      message: "Sucesso pae",
    });
  } catch (err) {
    res.status(400).send({
      message: "Fracasso pae",
    });
  }
});

### EXERCICIO 6

const getFilms = async (): Promise<any> => {
  const result: any = await connection.raw(`
  SELECT * FROM Filmes LIMIT 15`);
  console.log(result);

  return result[0];
};

app.get("/movies", async (req: Request, res: Response) => {
  try {
    const filmes = getFilms();

    res.status(200).send({
      filmes: filmes,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

### EXERCICIO 7
const getFilmes = async (text: string): Promise<any> => {
  const filmes = await connection.raw(`
    SELECT nome, sinopse FROM Filmes WHERE nome LIKE '%${text}%' OR sinopse LIKE '%${text}%'
  `);

  return filmes[0];
};

app.get("/movies/search/:text", async (req: Request, res: Response) => {
  try {
    const filmes: any = await getFilmes(req.params.text as string);

    res.status(200).send({
      Filmes: filmes,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});