import { Monster } from "src/app/monster/monster.model";
import { User } from "../../user/user/user.model";

export enum difficulty{
    easy = "EASY",
    medium = "MEDIUM",
    hard = "HARD",
    deadly = "DEADLY",
}


export class Encounter {
    id: number=0;
    name: string="";
    creator: User={id: 1, username: 'User1', password: "password123", favorites: [], monsters: []};
    players: string|string[]=[];
    monsters: Monster[]=[];
    difficulty: difficulty = difficulty.easy;
}