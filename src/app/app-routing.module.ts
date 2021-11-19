import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MonsterComponent } from './monster/monster.component';
import { MonsterdetailComponent } from './monsterdetail/monsterdetail.component';
import { MonstereditComponent } from './monsteredit/monsteredit.component';
import { MonstercreateComponent } from './monstercreate/monstercreate.component';

const routes: Routes = [
  
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'about', component: AboutComponent },
      { path: 'monster', component: MonsterComponent },
      { path: 'monstercreate', component: MonstercreateComponent},
      { path: 'monsterdetail/:id', component: MonsterdetailComponent},
      { path: 'monsteredit/:id', component: MonstereditComponent},
      { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
