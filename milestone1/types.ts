export interface RootObject {
    id: number;
    name: string;
    description: string;
    image: string;
    requirements: Requirement;
    location: Location;
    card: Card;
    drops: string[];
}

interface Requirement {
    accuracy: number;
    defence: number;
}

interface Location {
    world: string;
    area: string;
}

interface Card {
    name: string;
    effect: string;
    effectValues: number;
}