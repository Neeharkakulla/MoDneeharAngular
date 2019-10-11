import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngoiningService } from '../ongoing/ongoing.service';
import { TrainingDetails } from '../models/training.model';

@Component({
  selector: 'app-completed-training',
  templateUrl: './completed-training.component.html',
  styleUrls: ['./completed-training.component.css']
})
export class CompletedTrainingComponent implements OnInit {
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

}
