import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private users = [];
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers()
    .subscribe(
      (results:any) => {
        console.log(results);
        this.users = results;
      },
      err => console.error(err)
    );
  }
}
