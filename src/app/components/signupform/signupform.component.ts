import { Component, OnInit } from '@angular/core';
//import { AuthguardGuard } from '../authguard.guard';
//import { NgForm } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { User  } from "../../models/User/user";
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  user:User;
  userServ:UserService;

  constructor(auth:UserService) {
    this.userServ = auth; 
    this.user = new User('','','',null);
  }

  ngOnInit() {
  }

  submit(){
    var email = this.user.email;
    var password =this.user.password;
    var name  = this.user.name
    var contactno = this.user.contactno;

    this.userServ.signUp(name,email,password,contactno);
  }

}
