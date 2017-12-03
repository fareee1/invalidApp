import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule,Routes} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PrijaviProblemComponent } from './prijavi-problem/prijavi-problem.component';
import { OProjektuComponent } from './o-projektu/o-projektu.component';



const routes: Routes = [
  { path: 'main', component: HomePageComponent},

  { path: 'login', component: LoginComponent},

  { path: 'admin', component: AdminComponent},

  { path: 'problem', component: PrijaviProblemComponent},

  { path: 'oprojektu', component: OProjektuComponent},
  
  { path: '**', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    PrijaviProblemComponent,
    OProjektuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
