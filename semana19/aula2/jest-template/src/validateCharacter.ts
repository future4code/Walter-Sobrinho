import Character from "./Character";

export function validateCharacter(input: Character): Boolean {
  if (
    input.name === "" ||
    input.life === undefined ||
    input.defense === undefined ||
    input.power === undefined
  ) {
    return false;
  }

  if (input.life < 0 || input.defense < 0 || input.power < 0) {
    return false;
  }
  return true;
}
