import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  router:Router;

  constructor(router:Router,public afAuth: AngularFireAuth) {
    this.router = router;
  }

  logout() {
    this.afAuth.auth.signOut().then((success)=>{
      this.router.navigate(['']);
    });;
  }

  ngOnInit(){

    /*this.afAuth.authState.subscribe((user)=>{
      if(user){
        this.router.navigate(['dashboard']);
      }
      else{
        this.router.navigate(['signup']);
      }
    })*/
  }
}
