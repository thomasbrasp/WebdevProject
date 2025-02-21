import { Monsters} from "./types";
import monsters from "../archive/test.json"
monsters.forEach(monster =>
    monster.id === 4 ? console.log(monster.name) : undefined)
    // console.log(monster.hasQuestItem))
// console.log(monsters)