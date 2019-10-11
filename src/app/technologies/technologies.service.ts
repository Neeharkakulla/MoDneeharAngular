import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TechnologiesDetails } from '../models/technologies.model';





const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TechnologiesService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8084/technologies/technologies';
  

  public getAllTechnologies() {
    return this.http.get<TechnologiesDetails[]>(this.userUrl);
  }
  public getAllMentors(users) {
    return this.http.get<TechnologiesDetails[]>(this.userUrl+"/"+users+"/technology/");
  }

  public deleteUser(user) {
    return this.http.delete<TechnologiesDetails[]>(this.userUrl + "/"+ user+"/delete");
    
  }
  public update(user) {
    
    return this.http.put<TechnologiesDetails[]>(this.userUrl + "/update/"+user.id+"/"+user.fee,user);
    
  }
 
  public createUser(user) {
   
    return this.http.post(this.userUrl, user);
  }

}
