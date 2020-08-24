import moment from "moment";

moment.locale("pt-br");

type Transaction = {
  value: number;
  date: string;
  description: string;
};

type Client = {
  name: string;
  cpf: string;
  birth: string;
  balance: number;
  history: Transaction[];
};

const clients: Client[] = [];

const newAccount = (name: string, cpf: string, birth: string): any => {
  const birthDate = moment("17/10/1989", "DD/MM/YYYY");
  const age = moment().diff(birthDate, "years");
  if (age < 18) {
    return null;
  } else {
    const newClient = {
      name: name,
      cpf: cpf,
      birth: birth,
      balance: 0,
      history: [],
    };

    return newClient;
  }
};

const checkBalance = (name: string, cpf: string): number => {
  const balance = clients.filter((client) => {
    if (client.cpf === cpf && client.name === name) {
      return client.balance;
    }
  });
  return Number(balance);
};

const pay = (
  client: Client,
  valor: number,
  description: string,
  date?: string
) => {
  if (client.balance >= valor) {
    return null;
  } else if (date === undefined) {
    const newDate = moment().format("DD/MM/YYYY");
    const newPayment = client.history.push({
      value: valor,
      date: newDate,
      description: description,
    });
    client.balance = client.balance - valor;
    console.log(client.history);
    console.log(client.balance);
  } else {
    const newPayment = client.history.push({
      value: valor,
      date: date,
      description: description,
    });
    client.balance = client.balance - valor;
  }
  console.log(client.history);
  console.log(client.balance);
};

const insideTransaction = (
  payer: string,
  receiver: string,
  payerCpf: string,
  receiverCpf: string,
  value: number
) => {
  clients.forEach((client) => {
    if (client.cpf === payerCpf && client.balance >= value) {
      client.balance - value;
      console.log("Seu novo saldo é de", client.balance);
    }
  });
  clients.forEach((client) => {
    if (client.cpf === receiverCpf && client.name === receiver) {
      client.balance + value;
    }
    console.log(
      "A transferência no valor de ",
      value,
      "foi finalizada com sucesso"
    );
  });
};
