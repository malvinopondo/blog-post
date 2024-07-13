import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryAvbarComponent } from './layout/category-avbar/category-avbar.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryAvbarComponent,
    CategoryNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
