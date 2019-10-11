import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Userlist } from '../models/userslist.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserlistService {
 

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8084/user/users';
  
  public getUser(user):any
  {
    return this.http.get<any>(this.userUrl+"/"+user.userId+"/user");
  }
  public getUsers() {
    return this.http.get<Userlist[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }
 
  public block(user) {
    return this.http.put<Userlist>(this.userUrl + "/block/"+user.id,user);
    
  }
  public createUser(user) {
    return this.http.post(this.userUrl, user,{responseType:'text'});
  }
  public authenticate(userName: any, password: any,role:any) {
    return this.http.get<Userlist[]>(this.userUrl+"/"+userName+"/"+password+"/"+role);
  }
 
 

}
