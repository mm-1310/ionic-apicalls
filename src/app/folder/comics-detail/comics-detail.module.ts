import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicsDetailPageRoutingModule } from './comics-detail-routing.module';

import { ComicsDetailPage } from './comics-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicsDetailPageRoutingModule
  ],
  declarations: [ComicsDetailPage]
})
export class ComicsDetailPageModule {}
