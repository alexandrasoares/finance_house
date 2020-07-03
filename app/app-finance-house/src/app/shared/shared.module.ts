import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomePageModule } from '../home/home.module';
import { HeaderPage } from './header/header.page';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    HeaderPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgPipesModule
  ],
  exports: [
    HeaderPage
  ]
})
export class SharedModule { }
