import { User } from "src/app/user/user/user.model";

export class Encounter {
    id: number=0;
    name: string="";
    creator: User={id: 1, username: 'User1', password: "password123", favorites: [], monsters: []};
    players: []=[];
    monsters: []=[];
    difficulty: number=0;


}