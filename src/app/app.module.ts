import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersRoutingModule } from './users/users.routing.module';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

// imagine more imports here
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    AgmCoreModule.forRoot({
      apiKey: 'pacific-chalice-174017'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
