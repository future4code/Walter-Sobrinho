import moment from "moment";
import { JSONFIleManager } from "./JSONFileManager";
//1 O construtor serve para criar novos objetos de uma certa classe de forma sintática.

//2 Somente uma vez

//3 A partir de métodos getters instalados no interior da classe

//4

class UserAccount {
  private cpf: string;
  private name: string;
  private age: string;
  private balance: number = 0;
  // private transactions: Transaction[];

  constructor(cpf: string, name: string, age: string) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getBalance(): number {
    return this.balance;
  }

  public addBalance(value: number): void {
    this.balance + value;
    console.log("Saldo atualizado com sucesso");
  }
}

class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }
}

const newAccountName: string = process.argv[2];
const newAccountCpf: string = process.argv[3];
const newAccountAge: string = process.argv[4];

const fileManager: JSONFIleManager = new JSONFIleManager("accounts.json");
const accountList: any = fileManager.getObjectFromFile();

const newAccount: UserAccount = new UserAccount(
  newAccountName,
  newAccountCpf,
  newAccountAge
);

accountList.push(newAccount);
fileManager.writeObjectToFile(accountList);

console.log(accountList);
