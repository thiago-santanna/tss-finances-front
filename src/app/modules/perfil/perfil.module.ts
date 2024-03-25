import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PerfilModuleRoutingModule } from './perfil-module-routing.module';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    PerfilModuleRoutingModule,
    ButtonModule,
    DividerModule,
  ],
})
export class PerfilModule {}
