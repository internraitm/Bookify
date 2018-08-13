import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User/user';


@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  //styleUrls: ['./test-user.component.css']
})
export class TestUserComponent implements OnInit {

  users:User[];
  u =  new User("kunal","heman@bookify.com","ihavethepower",5656565656,'');
  constructor(public userserv : UserService) { }

  ngOnInit() {
  }

  getUsers(){
    var x = this.userserv.getUsers();
    x.snapshotChanges().subscribe( users =>{
      this.users = [];
      users.forEach(user => {
        var y =user.payload.toJSON();
        y["$key"] = user.key;
        this.users.push(y as User);
      });
      console.log(this.users);
      console.log(this.users[0]);
    });
  }

  //Function to add book
  addUser(){
    //console.log(this.b);
    this.userserv.addUser(this.u);
    
  }

  //Function to delete book
  deleteUser(key)
  {
    this.userserv.deleteUser(key);
  }
  
  //Function to update book
  updateUser(){
    this.userserv.editUser('-LJ52D6-cg-a6-wa4oj8',this.u);
  }

}
