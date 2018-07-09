import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";

import { Observable } from "rxjs";

@Injectable()
export class UsersService {
  apiUrl = environment.apiUrl;

  users = []
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.apiUrl + "users");
    // .subscribe( results => {
    //   this.users = results;
    // });
  }

  getUser(id) {
    //console.log(this.users);
    return this.http.get<any>(this.apiUrl + "users/"+id);
  }

  
}
