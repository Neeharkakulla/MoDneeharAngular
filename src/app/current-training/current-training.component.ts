import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngoiningService } from '../ongoing/ongoing.service';
import { TrainingDetails } from '../models/training.model';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  userTraining: TrainingDetails[];
  

  constructor(private routers:Router,private onginingService:OngoiningService) { }

  ngOnInit() {
    this.authenticateMentor();
    this.getUser();
     }
     public authenticateMentor()
     {
       
       var myObj = JSON.parse(window.localStorage.getItem("user"));
       //console.log(myObj);
       if(myObj==null||myObj.role!="user")
       {
         this.routers.navigate(['/logins']);
       }
      }
       
public getUser()
{
  var user=JSON.parse(window.localStorage.getItem("user"));
  this.onginingService.getUser(user).subscribe(data=>
    {
      this.userTraining=data;
      console.log(data);
    }
  );
}
public payment(users)
{
  console.log(users.progress);
}
public edit(user)
{
  
this.onginingService.update(user).subscribe(data=>
{
  if(data){
  this.userTraining=data;
 alert(user.progress+" : progress Successfully Updated" );
  }
});
 
}
}
