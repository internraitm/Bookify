import { Component, OnInit } from '@angular/core';
//import { AuthguardGuard } from '../authguard.guard';
//import { NgForm } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { User  } from "../../models/User/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
//import firebase = require('firebase');
import * as firebase from 'firebase';
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  router:Router;
  user:User;
  userServ:UserService;

  constructor( public afAuth: AngularFireAuth,router:Router) {
    this.router = router;
    this.user = new User('','','',null,null);
  }

  ngOnInit() {
  }

  
  /*submit(){
    var email = this.user.email;
    var password =this.user.password;
    var name  = this.user.name
    var contactno = this.user.contactno;

    this.userServ.signUp(name,email,password,contactno);
  }*/

  submit(){

    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } 
      else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

}
