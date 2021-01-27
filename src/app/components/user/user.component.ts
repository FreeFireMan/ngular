import { Component, OnInit } from '@angular/core';
import {users} from '../../data/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = users;
  constructor() { }

  ngOnInit(): void {
  }

}
