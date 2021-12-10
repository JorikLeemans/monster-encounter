import { Encounter } from "src/app/encounter/encounter/encounter.model";
import { Party } from "src/app/party/party/party.model";
import { User } from "../../user/user/user.model";

export class Campaign{
    id: number=0;
    name: string="";
    creator: User = {
        id: 1, username: 'User1', password: "password123", favorites: [], monsters: []
    };
    party: Party={
        id: 1, name: 'Party1', size:0, campaign:'Campaign1', players: ["Jaap", "Bart"]
    };
    encounters: Encounter[]=[];


}