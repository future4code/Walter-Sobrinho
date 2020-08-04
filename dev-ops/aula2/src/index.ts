interface Character {
  name: string;
  goes_by: string;
  image_link: string;
}

export async function addCharacter(input: Character): Promise<any> {
  if (!input.name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing name" }),
    };
  }
  if (!input.goes_by) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing alias" }),
    };
  }
  if (!input.image_link) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing image" }),
    };
  }
}
