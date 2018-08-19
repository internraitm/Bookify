import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User  } from "../../models/User/user";
import * as firebase from 'firebase';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  userserv:UserService;
  user:User
  email:String;

  constructor(userserv:UserService) {
    this.userserv = userserv;
    this.user = new User('','','',null,null);

    var user = firebase.auth().currentUser;
    this.user.email = user.email;
    console.log(this.user.email);
   }

  ngOnInit() {
  }

  submit(){
    this.userserv.addUser(this.user);
  }
}
