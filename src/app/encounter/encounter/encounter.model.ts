import { User } from "../../user/user/user.model";

enum difficulty{
    easy,
    medium,
    hard,
    deadly,
}


export class Encounter {
    id: number=0;
    name: string="";
    creator: User={id: 1, username: 'User1', password: "password123", favorites: [], monsters: []};
    players: []=[];
    monsters: []=[];
    difficulty: difficulty = 1;
}