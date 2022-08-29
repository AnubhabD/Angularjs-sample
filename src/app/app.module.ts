import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ButtonComponent } from './button/button.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormOutputsComponent } from './reactive-form-outputs/reactive-form-outputs.component';
import { ApiComponent } from './api/api.component';
import { BackendApiComponent } from './backend-api/backend-api.component';
import { DialogComponent } from './dialog/dialog.component';

import { HttpInterceptorProviders } from './interceptor';

import { ReduxModule } from './redux/redux.module';
import { MaterialComponent } from './material/material.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ButtonComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveFormOutputsComponent,
    HomeComponent,
    ApiComponent,
    BackendApiComponent,
    DialogComponent,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReduxModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}