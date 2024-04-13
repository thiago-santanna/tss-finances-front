import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';

import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardFinanceiroComponent } from './components/card-financeiro/card-financeiro.component';

@NgModule({
  declarations: [DashboardComponent, CardFinanceiroComponent],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    ImageModule,
    ButtonModule,
  ],
})
export class DashboardModule {}
