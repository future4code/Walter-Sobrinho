import User from "../src/User";
import CasinoUser, {
  checkPurchase,
  NATIONALITY,
  verifyAge,
  Casino,
  LOCATION,
} from "../src";
import "jest-extended";
import { Post } from "../src/models/Post";
import { PostDatabase } from "../src/data/PostDatabase";

describe("testing funcion checkPurchase", () => {
  test("testing balance > value", () => {
    const steve: User = {
      name: "Steve Morse",
      balance: 500,
    };
    const result = checkPurchase(steve, 100);
    expect(result?.balance).toBe(400);
  });

  test("testing balance = value", () => {
    const steve: User = {
      name: "Steve Morse",
      balance: 100,
    };
    const result = checkPurchase(steve, 100);
    expect(result?.balance).toBe(0);
  });

  test("testing balance < value", () => {
    const steve: User = {
      name: "Steve Morse",
      balance: 5,
    };
    const result = checkPurchase(steve, 100);
    expect(result).toBeUndefined();
  });
});

describe("testing veryAge function", () => {
  test("testing brazilian casinos with allowed users", () => {
    const barDaPanair: Casino = {
      name: "Bar da Panair",
      location: LOCATION.BRAZIL,
    };
    const milton: CasinoUser[] = [
      {
        name: "Milton Nascimento",
        age: 77,
        nationality: NATIONALITY.BRAZILIAN,
      },
    ];
    const result = verifyAge(barDaPanair, milton);

    expect(result).toBeTruthy();
  });

  test("testing brazilian casino with allowed american user", () => {
    const barDaPanair: Casino = {
      name: "Bar da Panair",
      location: LOCATION.BRAZIL,
    };
    const steve: CasinoUser[] = [
      {
        name: "Steve Morse",
        age: 65,
        nationality: NATIONALITY.AMERICAN,
      },
    ];
    const result = verifyAge(barDaPanair, steve);
    expect(result).toBeTruthy();
  });

  test("testing american casinos with unallowed members", () => {
    const lux: Casino = {
      name: "Lux",
      location: LOCATION.EUA,
    };
    const users: CasinoUser[] = [
      {
        name: "Justin Bieber",
        age: 19,
        nationality: NATIONALITY.AMERICAN,
      },
      {
        name: "Selena Gomez",
        age: 19,
        nationality: NATIONALITY.AMERICAN,
      },
      {
        name: "Luan Santana",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      },
      {
        name: "Evelyn Araújo",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      },
    ];
    const result = verifyAge(lux, users);
    expect(result.brazilians.unallowed).toHaveLength(2);
  });

  test("testing american casino with members of both ranges", () => {
    const lux: Casino = {
      name: "Lux",
      location: LOCATION.EUA,
    };
    const users: CasinoUser[] = [
      {
        name: "Justin Bieber",
        age: 21,
        nationality: NATIONALITY.AMERICAN,
      },
      {
        name: "Selena Gomez",
        age: 21,
        nationality: NATIONALITY.AMERICAN,
      },
      {
        name: "Luan Santana",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      },
      {
        name: "Evelyn Araújo",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      },
    ];
    const result = verifyAge(lux, users);
    expect(result.americans.allowed).toHaveLength(2);
  });

  test("testing by array lenght", () => {
    const milton: CasinoUser[] = [
      {
        name: "Milton Nascimento",
        age: 77,
        nationality: NATIONALITY.BRAZILIAN,
      },
    ];

    const barDaPanair: Casino = {
      name: "Bar da Panair",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(barDaPanair, milton);

    expect(result.brazilians.allowed.length).toBeWithin(0, 2);
  });

  test("test if casino user allows american user by lenght", () => {
    const lux: Casino = {
      name: "Lux",
      location: LOCATION.EUA,
    };
    const steve: CasinoUser[] = [
      {
        name: "Steve Morse",
        age: 65,
        nationality: NATIONALITY.AMERICAN,
      },
    ];
    const result = verifyAge(lux, steve);

    expect(result.americans.unallowed.length).toBe(0);
  });

  test("testing american casino with mixed nationality members age 19 by name inside array", () => {
    const users: CasinoUser[] = [
      {
        name: "Justin Bieber",
        age: 19,
        nationality: NATIONALITY.AMERICAN,
      },
      {
        name: "Selena Gomez",
        age: 19,
        nationality: NATIONALITY.AMERICAN,
      },
      {
        name: "Luan Santana",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      },
      {
        name: "Evelyn Araújo",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      },
    ];
    const lux: Casino = {
      name: "Lux",
      location: LOCATION.EUA,
    };

    const result = verifyAge(lux, users);

    expect(result.americans.unallowed).toContain("Justin Bieber");
  });

  test("testing american casino with mixed nationality and both ranges of age by array size of each case", () => {
    const users: CasinoUser[] = [
      {
        name: "Justin Bieber",
        age: 21,
        nationality: NATIONALITY.AMERICAN,
      },
      {
        name: "Selena Gomez",
        age: 21,
        nationality: NATIONALITY.AMERICAN,
      },
      {
        name: "Luan Santana",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      },
      {
        name: "Evelyn Araújo",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN,
      },
    ];
    const lux: Casino = {
      name: "Lux",
      location: LOCATION.EUA,
    };
    const result = verifyAge(lux, users);

    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });

  describe("testing class post functions", () => {
    test("if we can write a post and check it", async () => {
      const post = {
        id: "new post",
        title: "coffee time",
        content:
          "https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      };
      const postDb = new PostDatabase();
      const createPosts = postDb.createPosts(post);

      const postFromDatabase = await getPostById(post.id);
    });
  });
});
