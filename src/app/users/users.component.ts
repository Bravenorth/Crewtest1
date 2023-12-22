import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: Observable<Users[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }
}
