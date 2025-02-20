export interface Monsters {
    id:           number;
    name:         string;
    description:  string;
    image:        string;
    requirements: Requirements;
    location:     Location;
    card:         Card;
    drops:        string[];
    birthdate:    Date;
    hasQuestItem: boolean;
}

export interface Card {
    name:         string;
    effect:       string;
    effectValues: number;
}

export interface Location {
    world: World;
    area:  string;
}

export enum World {
    BlunderHills = "Blunder Hills",
    YumYumDesert = "Yum Yum Desert",
}

export interface Requirements {
    accuracy: number | string;
    defence:  number | string;
}
