import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HomePageRoutingModule } from './home-routing.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
