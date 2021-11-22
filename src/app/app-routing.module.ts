import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MonsterComponent } from './monster/monster.component';
import { MonsterdetailComponent } from './monsterdetail/monsterdetail.component';
import { MonstereditComponent } from './monsteredit/monsteredit.component';
import { MonstercreateComponent } from './monstercreate/monstercreate.component';
import { UserComponent } from './user/user/user.component';
import { UsercreateComponent } from './user/usercreate/usercreate.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { UsereditComponent } from './user/useredit/useredit.component';
import { PartyComponent } from './party/party/party.component';
import { PartycreateComponent } from './party/partycreate/partycreate.component';
import { PartydetailComponent } from './party/partydetail/partydetail.component';
import { PartyeditComponent } from './party/partyedit/partyedit.component';

const routes: Routes = [
  
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'about', component: AboutComponent },
      { path: 'monster', component: MonsterComponent },
      { path: 'monstercreate', component: MonstercreateComponent},
      { path: 'monsterdetail/:id', component: MonsterdetailComponent},
      { path: 'monsteredit/:id', component: MonstereditComponent},
      { path: 'user', component: UserComponent},
      { path: 'usercreate', component: UsercreateComponent},
      { path: 'userdetail/:id', component: UserdetailComponent},
      { path: 'useredit/:id', component: UsereditComponent},
      { path: 'party', component: PartyComponent},
      { path: 'partycreate', component: PartycreateComponent},
      { path: 'partydetail/:id', component: PartydetailComponent},
      { path: 'partyedit/:id', component: PartyeditComponent},
      { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
