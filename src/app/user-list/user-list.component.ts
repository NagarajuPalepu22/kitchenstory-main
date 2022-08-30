import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userlist = [
    {
      username:'raju1234',
      email:'raju@gmail.com',
      contactNumber:123454677,
    },
    {
      username:'varma@1234',
      email:'varma@gmail.com',
      contactNumber:987645667,
    },
    {
      username:'suresh1234',
      email:'suresh@gmail.com',
      contactNumber:8998568677,
    },

  ];

}
