import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomePageModule } from '../home/home.module';
import { HeaderPage } from './header/header.page';

@NgModule({
  declarations: [
    HeaderPage
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderPage
  ]
})
export class SharedModule { }
