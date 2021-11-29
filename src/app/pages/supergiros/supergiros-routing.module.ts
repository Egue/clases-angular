import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupergirosComponent } from './supergiros.component';

const routes: Routes = [{ path: '', component: SupergirosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupergirosRoutingModule { }
