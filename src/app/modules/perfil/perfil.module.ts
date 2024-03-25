import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PerfilModuleRoutingModule } from './perfil-module-routing.module';

@NgModule({
  declarations: [PerfilComponent],
  imports: [CommonModule, PerfilModuleRoutingModule],
})
export class PerfilModule {}
