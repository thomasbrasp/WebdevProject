import monsterData from "./idleonMonsters.json";
import { RootObject } from "./types";

async function main() {

    const response = await fetch("https://sampleapis.assimilate.be/bitcoin/current");

    const rootobject: Rootobject = await response.json();
    const bpi = rootobject["bpi"];
    const currency: Currency | undefined = bpi[valutaType];

    if (bpi.valutaType) {
        const currency = bpi.valutaType;
        console.log(`De huidige prijs van bitcoin is ${currency.rate_float} ${currency.code}`);
    } else {
        console.log("Ongeldige valuta gekozen. Probeer opnieuw met EUR, USD, of GBP.");
    }
}

export{}