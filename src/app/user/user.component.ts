import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userCreationStatus = 'no user was created!'
  userName = '';
  constructor() { }

  ngOnInit() {
  }

  onResetUser(event: Event) {
    this.userCreationStatus = this.userName + 'user was removed!';
    this.userName = '';
  }

}
