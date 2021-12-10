import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCommonModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { MonsterComponent } from './monster/monster.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MonsterdetailComponent } from './monsterdetail/monsterdetail.component';
import { MonstereditComponent } from './monsteredit/monsteredit.component';
import { MonstercreateComponent } from './monstercreate/monstercreate.component';
import { FormsModule } from '@angular/forms';

import {MonsterService} from './monster/monster.service';
import { UserComponent } from './user/user/user.component';
import { UserdetailComponent } from './user/userdetail/userdetail.component';
import { UsercreateComponent } from './user/usercreate/usercreate.component';
import { UsereditComponent } from './user/useredit/useredit.component';
import { PartyComponent } from './party/party/party.component';
import { PartydetailComponent } from './party/partydetail/partydetail.component';
import { PartycreateComponent } from './party/partycreate/partycreate.component';
import { PartyeditComponent } from './party/partyedit/partyedit.component';
import { CampaignComponent } from './campaign/campaign/campaign.component';
import { CampaigndetailComponent } from './campaign/campaigndetail/campaigndetail.component';
import { CampaigncreateComponent } from './campaign/campaigncreate/campaigncreate.component';
import { CampaigneditComponent } from './campaign/campaignedit/campaignedit.component';
import { EncounterComponent } from './encounter/encounter/encounter.component';
import { EncountercreateComponent } from './encounter/encountercreate/encountercreate.component';
import { EncounterdetailComponent } from './encounter/encounterdetail/encounterdetail.component';
import { EncountereditComponent } from './encounter/encounteredit/encounteredit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    HeaderComponent,
    SidenavComponent,
    MonsterComponent,
    MonsterdetailComponent,
    MonstereditComponent,
    MonstercreateComponent,
    UserComponent,
    UserdetailComponent,
    UsercreateComponent,
    UsereditComponent,
    PartyComponent,
    PartydetailComponent,
    PartycreateComponent,
    PartyeditComponent,
    CampaignComponent,
    CampaigndetailComponent,
    CampaigncreateComponent,
    CampaigneditComponent,
    EncounterComponent,
    EncountercreateComponent,
    EncounterdetailComponent,
    EncountereditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCommonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    MonsterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
