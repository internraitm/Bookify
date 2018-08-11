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
import { BookService } from './services/book.service';
import { AdvancedSearchComponent } from './components/advancesearch/advancesearch.coponent';
import { HttpModule } from '@angular/http';
import { UserProfileComponent } from './components/userprofile/userprof.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';

//firebase imports

import { TestbookComponent } from './components/testbook/testbook.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import 'firebase/auth';
import { TestUserComponent } from './components/test-user/test-user.component';

export const firebaseConfig={
  apiKey: "AIzaSyDHuoMFJSYSjdySRnhltK46lwxliS6PE64",
  authDomain: "bookify-becab.firebaseapp.com",
  databaseURL: "https://bookify-becab.firebaseio.com",
  projectId: "bookify-becab",
  storageBucket: "",
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
    path: 'userprofile',
    component: UserProfileComponent
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
    path: 'tstuser',
    component:  TestUserComponent
  },
  {  
    path:'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent

  }
  /*{
    path: 'main',
    component: AppComponent
  }*/
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
    TestbookComponent,
    TestUserComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [AngularFireAuthModule,UserService, AngularFireDatabase,AuthguardGuard,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
