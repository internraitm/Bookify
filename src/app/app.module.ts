import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule,Routes} from '@angular/router';   
import { UserService } from './services/user.service';
import { AuthguardGuard } from "./utils/authguard.guard";
import { SignupformComponent } from './components/signupform/signupform.component';
import { SearchbookComponent } from './components/searchbook/searchbook.component';
import { AdvancedSearchComponent } from './components/advancesearch/advancesearch.coponent';
import { HttpModule } from '@angular/http';
import { UserProfileComponent } from './components/userprofile/userprof.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { TestbookComponent } from './components/testbook/testbook.component';

//Angular Imports
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

//Service Imports
import { BookService } from './services/book.service';


export const firebaseConfig = {
  apiKey: "AIzaSyDHuoMFJSYSjdySRnhltK46lwxliS6PE64",
    authDomain: "bookify-becab.firebaseapp.com",
    databaseURL: "https://bookify-becab.firebaseio.com",
    projectId: "bookify-becab",
    storageBucket: "bookify-becab.appspot.com",
    messagingSenderId: "96961588980"
}

const approutes:Routes = [
  {
    path:'',
    component:SearchbookComponent
  },
 
  {
    path:'login',
    component:LoginformComponent
  },
  {
    path: 'signup',
    component:SignupformComponent
  },
  {
    path: 'advancesearch',
    component: AdvancedSearchComponent
  },
  {
    path: 'bk',
    component:BookdetailsComponent
  },
  {
    path: 'testbook',
    component:  TestbookComponent
  },
  {
    path: 'userprofile',
    component: UserProfileComponent
  },
  {  
    path:'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent

  }
]
 

@NgModule({
  declarations: [
    AppComponent,
    AdvancedSearchComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent,
    SignupformComponent,
    SearchbookComponent,
    UserProfileComponent,
    NavbarComponent,
    BookdetailsComponent,
    TestbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    UserService,
    AuthguardGuard,
    AngularFireAuth,
    AngularFireDatabase,
    BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
