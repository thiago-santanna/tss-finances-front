import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';

import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    ImageModule,
    ButtonModule,
  ],
})
export class DashboardModule {}
