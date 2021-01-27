import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent} from './components/user/user.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FullUserComponent} from './components/full-user/full-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FullUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/home', component: HomeComponent
    },
      {
        path: 'link/users', component: UserComponent, children: [
          {
            path: ':id', component: FullUserComponent
          }
        ]
      },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
