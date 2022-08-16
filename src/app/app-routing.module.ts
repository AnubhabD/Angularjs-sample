import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './login.guard';

import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ApiComponent } from './api/api.component';
import { BackendApiComponent } from './backend-api/backend-api.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'backendApi',
    component: BackendApiComponent,
  },
  {
    path: 'demoApi',
    component: ApiComponent,
  },
  {
    path: 'form',
    component: ReactiveFormComponent,

    // children: [
    //   {
    //     path: 'templateForm', component: TemplateFormComponent
    //   }
    // ]
  },
  {
    path: 'templateForm',
    canActivate: [LoginGuard],
    component: TemplateFormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}