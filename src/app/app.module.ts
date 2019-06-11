import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Global } from './shared/Global';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsComponent } from './components/components.component';
import { TestUmComponent } from './components/test-um/test-um.component';
import { TestInComponent } from './components/teste/test-in/test-in.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ComponentsComponent,
    TestUmComponent,
    TestInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule { }
