import readline, {keyInSelect} from "readline-sync";
import pokemons from "../pokemons.json";

console.log(`Welcome to the JSON data viewer!\n`);
const menuOptions = ["View all data", "Filter by ID","Exit"];

for (let i:number = 0; i < menuOptions.length; i++){
    console.log(`${i + 1}. ${menuOptions[i]}`)
}

// let option: number = keyInSelect(menuOptions, "Please enter your choice: ", {cancel: false});
let option: number = readline.questionInt("\nPlease enter your choice: ")
if (option < 1 || option > 3){
    console.log("Incorrect input. Please enter a number between 1 and 3")
}
switch (option){
    case 1:
        // for (const pokemon of pokemons) {
            // console.log(pokemon)
        // }
        let jsonString = JSON.stringify(pokemons)
        console.log(jsonString)
        break;
    case 2:

        break;
    case 3:

        break;
}

export {}