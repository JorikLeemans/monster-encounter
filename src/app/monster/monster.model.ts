import { User } from "../user/user/user.model";

export class Monster{
    name: string='';
    id: number=0;
    hp: number=0;
    cr: number=0;
    movement: Movement[] = [];
    creator: User = {
      id:0,
      username: '',
      password: '',
      favorites: [],
      monsters: []
    };
    
}
interface Movement{
    movementtype: string,
      amount: number;
    }

