import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
 
import { PlayerInfoPageRoutingModule } from './player-info-routing.module';

import { PlayerInfoPage } from './player-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    PlayerInfoPageRoutingModule
  ],
  declarations: [PlayerInfoPage]
})
export class PlayerInfoPageModule {}
