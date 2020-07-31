import { UserDatabase } from "../database/UserDatabase";
import { HashGenerator } from "../services/HashManager";
import { TokenGenerator } from "../services/TokenGenerator";
import { IdGenerator } from "../services/IdGenerator";
import { InvalidInputError } from "../error/InvalidInputError";
import { User, stringToUserRole } from "../model/User";
import { NotFound } from "../error/NotFound";

export class UserBusiness {
  constructor(
    private userDatebase: UserDatabase,
    private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    if (!name || !email || !password || !role) {
      throw new InvalidInputError("There's an input missing");
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") < email.indexOf("@")) {
      throw new InvalidInputError("Invalid email format");
    }

    if (password.length < 6) {
      throw new InvalidInputError("Invalid password");
    }

    const id = this.idGenerator.generate();
    const cryptedPassword = await this.hashGenerator.hash(password);

    await this.userDatebase.signUp(
      new User(id, name, email, cryptedPassword, stringToUserRole(role))
    );

    const accessToken = this.tokenGenerator.generate({
      id,
      role,
    });
    return { accessToken };
  }

  public async login(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new InvalidInputError("You need both parameters to log in!");
    }
    const user = await this.userDatebase.userInfo(email);

    if (!user) {
      throw new NotFound("User not found");
    }

    const validatePassword = await this.hashGenerator.compareHash(
      password,
      user.getPassword()
    );

    if (!validatePassword) {
      throw new InvalidInputError("Invalid password");
    }

    const token = this.tokenGenerator.generate({
      id: user.getId(),
      role: user.getRole(),
    });

    return token;
  }
}
