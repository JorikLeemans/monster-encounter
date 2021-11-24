import { User } from "src/app/user/user/user.model";

export class Party{
    id: number=0;
    name: string='';
    size: number=0;
    campaign: string='';
    users: User[]=[];
}