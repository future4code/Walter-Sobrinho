import Character from "./Character";
import { validateCharacter } from "./validateCharacter";

export function performAttack(
  attacker: Character,
  defender: Character,
  validateCharacter: (input: Character) => Boolean
): Character {
  if (validateCharacter(attacker) && validateCharacter(defender)) {
    if (attacker.power - defender.defense > 0) {
      const hpLost: number = attacker.power - defender.defense;
      const newHp: number = defender.life - hpLost;
      return (defender = {
        ...defender,
        life: newHp,
      });
    } else if (attacker.power - defender.defense <= 0) {
      return defender;
    }
  } else {
    throw new Error("Invalid character");
  }
}
