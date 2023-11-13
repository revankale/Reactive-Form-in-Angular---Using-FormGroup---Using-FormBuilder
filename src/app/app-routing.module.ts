import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsingFormGroupComponent } from './forms/using-form-group/using-form-group.component';
import { UsingFormBuilderComponent } from './forms/using-form-builder/using-form-builder.component';

const routes: Routes = [
  {
    path: "form-group",
    component: UsingFormGroupComponent
  },
  {
    path: "form-builder",
    component: UsingFormBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
