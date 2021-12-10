import { User } from "src/app/user/user/user.model";

export class Campaign{
    id: number=0;
    name: string="";
    creator: User = {
        id: 1, username: 'User1', password: "password123", favorites: [], monsters: []
    };
    players: []=[];
    encounters: []=[];


}