import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsingFormGroupComponent } from './forms/using-form-group/using-form-group.component';
import { UsingFormBuilderComponent } from './forms/using-form-builder/using-form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingFormGroupComponent,
    UsingFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
