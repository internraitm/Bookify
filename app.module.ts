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
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [UserService,AuthguardGuard,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
