import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { moveMessagePortToContext } from "worker_threads";
import moment from "moment";
/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get("/", testEndpoint);

async function testEndpoint(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Users
    `);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const addUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  if (name === "" || nickname === "" || email === "") {
    return console.log("Por favor, preencha todos os campos");
  } else {
    await connection
      .insert({
        id: String(Date.now()),
        name: name,
        nickname: nickname,
        email: email,
      })
      .into("Users");
  }
};

const addUserEndPoint = async (req: Request, res: Response) => {
  try {
    await addUser(req.body.name, req.body.nickname, req.body.email);
    res.status(200).send({
      message: `Usuário criado com sucesso!`,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

app.put("/user", addUserEndPoint);

const getUser = async (id: string): Promise<any> => {
  const user = connection.from("Users").select("name", "id").where({ id: id });
  return user;
};

const endPointGetUserById = async (req: Request, res: Response) => {
  try {
    const user: any = await getUser(req.params.id);

    res.status(200).send({
      message: user,
    });
  } catch (err) {
    res.status(400).send({
      message: "Nenhum usuário encontrado",
    });
  }
};

app.get("/user/:id", endPointGetUserById);

const editUser = async (
  name: string,
  nickname: string,
  id: string
): Promise<void> => {
  await connection.raw(`
  UPDATE Users SET name = "${name}", nickname = "${nickname}" WHERE id = ${id}`);
};

const editUserEndpoint = async (req: Request, res: Response) => {
  try {
    await editUser(req.body.name, req.body.nickname, req.params.id);

    res.status(200).send({
      message: "Alterações feitas",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};

app.post("/user/edit/:id", editUserEndpoint);

const newTask = async (
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: string
): Promise<void> => {
  if (
    title === "" ||
    description === "" ||
    limitDate === "" ||
    creatorUserId === ""
  ) {
    return console.log("Os campos não podem ser vazios");
  } else {
    const newLimitDate: moment.Moment = moment(limitDate, "DD-MM-YYY");
    const limitDateFormated = newLimitDate.format("YYYY-MM-DD");
    await connection
      .insert({
        title: title,
        description: description,
        limitDate: limitDateFormated,
        creatorUserId: creatorUserId,
      })
      .into("Tasks");
  }
};

const newTaskEndpoint = async (req: Request, res: Response) => {
  try {
    await newTask(
      req.body.title,
      req.body.description,
      req.body.limitDate,
      req.body.creatorUserId
    );

    res.status(200).send({
      message: "Tarefa adicionada com sucesso",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

app.put("/task", newTaskEndpoint);
