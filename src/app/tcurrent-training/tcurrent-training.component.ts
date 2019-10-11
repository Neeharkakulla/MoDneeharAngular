import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngoiningService } from '../ongoing/ongoing.service';
import { TrainingDetails } from '../models/training.model';

@Component({
  selector: 'app-tcurrent-training',
  templateUrl: './tcurrent-training.component.html',
  styleUrls: ['./tcurrent-training.component.css']
})
export class TcurrentTrainingComponent implements OnInit {
  userTraining:TrainingDetails[];
 

  constructor(private routers:Router,private onginingService:OngoiningService) { }

  ngOnInit() {
    this.authenticateMentor();
    this.getMentor();
     }
     public authenticateMentor()
     {
       
       var myObj = JSON.parse(window.localStorage.getItem("user"));
      
       if(myObj==null||myObj.role!="mentor")
       {
         this.routers.navigate(['/logins']);
       }
      }
       
public getMentor()
{
  var user=JSON.parse(window.localStorage.getItem("user"));

  this.onginingService.getMentor(user).subscribe(data=>
    {
      this.userTraining=data;
    
    }
  );
}
}
