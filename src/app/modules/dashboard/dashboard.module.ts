import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardModuleRoutingModule],
})
export class DashboardModule {}
