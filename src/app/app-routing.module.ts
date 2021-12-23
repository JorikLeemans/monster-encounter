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
import { CampaignComponent } from './campaign/campaign/campaign.component';
import { CampaigncreateComponent } from './campaign/campaigncreate/campaigncreate.component';
import { CampaigndetailComponent } from './campaign/campaigndetail/campaigndetail.component';
import { CampaigneditComponent } from './campaign/campaignedit/campaignedit.component';
import { EncounterComponent } from './encounter/encounter/encounter.component';
import { EncountercreateComponent } from './encounter/encountercreate/encountercreate.component';
import { EncounterdetailComponent } from './encounter/encounterdetail/encounterdetail.component';
import { EncountereditComponent } from './encounter/encounteredit/encounteredit.component';
import { CampaignencounterComponent } from './campaign/campaignencounter/campaignencounter.component';
import { EncountermonsterComponent } from './encounter/encountermonster/encountermonster.component';

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
      { path: 'campaign', component: CampaignComponent},
      { path: 'campaigncreate', component: CampaigncreateComponent},
      { path: 'campaigndetail/:id', component: CampaigndetailComponent},
      { path: 'campaignedit/:id', component: CampaigneditComponent},
      { path: 'encounter', component: EncounterComponent},
      { path: 'encountercreate', component: EncountercreateComponent},
      { path: 'encounterdetail/:id', component: EncounterdetailComponent},
      { path: 'encounteredit/:id', component: EncountereditComponent},
      { path: 'campaignencounter/:id', component: CampaignencounterComponent},
      { path: 'encountermonster/:id', component: EncountermonsterComponent},
      { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
