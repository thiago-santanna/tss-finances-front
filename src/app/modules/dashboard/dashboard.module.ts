import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { CardFinanceiroComponent } from './components/card-financeiro/card-financeiro.component';

import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { TableLancamentosComponent } from './components/table-lancamentos/table-lancamentos.component';

@NgModule({
  declarations: [DashboardComponent, CardFinanceiroComponent, TableLancamentosComponent],
  imports: [
    ImageModule,
    CommonModule,
    ButtonModule,
    DashboardModuleRoutingModule,
  ],
})
export class DashboardModule {}
