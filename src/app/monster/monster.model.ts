export class Monster{
    name: string='';
    id: number=0;
    hp: number=0;
    cr: number=0;
    movement: Movement[] = [];
    
}
interface Movement{
    movementtype: string,
      amount: number;
    }

