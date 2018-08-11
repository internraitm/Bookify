import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User} from '../../models/User/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

router:Router;
userServ:UserService;
user:User;
  constructor( router:Router , public us:UserService, public afAuth: AngularFireAuth) {
    this.router = router;
    this.userServ = us ;
    this.user = new User('','','',null);
    }

    login_google() {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((success)=>{
        this.router.navigate(['userprofile']);
      });
    }

    login(){
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then((success)=>{
        this.router.navigate(['userprofile']);

       // sessionStorage.setItem('key', 'value');
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }
  
    /*logout() {
      this.afAuth.auth.signOut().then((success)=>{
        this.router.navigate(['signup']);
      });;
    }*/
  
  ngOnInit() {
  }

 /* submit(){
    var email = this.user.email;
    var password =this.user.password;
    
    this.userServ.login(email,password);

    //console.log(email + password);
    
    if (email == 'admin@gmail.com' && password == 'admin'){
      this.userServ.setUserLoggedIn();
      this.router.navigate(['dashboard']);

    }
  }*/

}
