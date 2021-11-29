import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupergirosRoutingModule } from './supergiros-routing.module';
import { SupergirosComponent } from './supergiros.component';
import { PagosComponent } from './pagos/pagos.component';


@NgModule({
  declarations: [
    SupergirosComponent,
    PagosComponent
  ],
  imports: [
    CommonModule,
    SupergirosRoutingModule
  ]
})
export class SupergirosModule { }
