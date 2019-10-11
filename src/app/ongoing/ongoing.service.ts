import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TrainingDetails } from '../models/training.model';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OngoiningService {
 
 
  
 
  

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8084/training/training';
  

  public getAllTraining() {
    return this.http.get<TrainingDetails[]>(this.userUrl);
  }
  updateStatus(user: any) {
    return this.http.put<TrainingDetails[]>(this.userUrl+"/true/update",user);
  }
  update(user: any) {
    console.log(user.progress);
    return this.http.put<TrainingDetails[]>(this.userUrl+"/"+user.progress+"/progress",user);
   
  }
  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }
 
 public getAllTrainerDetails(user) {
    return this.http.get<TrainingDetails[]>(this.userUrl+"/"+user.userId)
  }
  public createUser(user) {
    console.log(user);
    return this.http.post(this.userUrl, user);
  }
 public getUser(user: any) {
    return this.http.get<TrainingDetails[]>(this.userUrl+"/"+user.userId+"/completedTrainings")
  }
  public getMentor(user:any) {
    return this.http.get<TrainingDetails[]>(this.userUrl+"/"+user.userId+"/tcompletedTrainings")
  }
  

}
