import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
import { User} from '../../models/User/user';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

userServ:UserService;
user:User;
  constructor(private router:Router , public us:UserService) {
    this.userServ = us ;
    this.user = new User('','','',null);
    }

  ngOnInit() {
  }

  submit(){
    var email = this.user.email;
    var password =this.user.password;
    
    this.userServ.login(email,password);

    //console.log(email + password);
    
    if (email == 'admin@gmail.com' && password == 'admin'){
      this.userServ.setUserLoggedIn();
      this.router.navigate(['dashboard']);

    }
  }

}
