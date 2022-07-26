import { AdminModule } from './@admin/pages/admin.module';
import { PublicModule } from './@public/pages/public.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './@graphql/modules/graphql.module';
import { Apollo } from 'apollo-angular';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    PublicModule,
    AppRoutingModule,
    GraphQLModule
  ],
  providers: [
    Apollo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
