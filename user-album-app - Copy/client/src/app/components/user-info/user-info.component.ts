import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  users: User[] = [];
  userAddress: string[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
    //this.jsonObj = JSON.parse(this.jsonString);
  }

  getUser() {
    this.userService.getUsers()
      .subscribe(
        res => {
          this.users = res;
          this.userAddress = res.map(res=>res.address);

          console.log(this.userAddress);
        }
        // err => console.log(err)
      )
  }

}
