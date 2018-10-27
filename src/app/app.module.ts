import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { RegisterComponent } from './loggin/register.component';

import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app-routing.module';

@NgModule({  
  declarations: [
    AppComponent,
    LogginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
