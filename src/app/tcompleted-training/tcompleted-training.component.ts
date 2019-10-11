import { Component, OnInit } from '@angular/core';
import { TrainingDetails } from '../models/training.model';
import { OngoiningService } from '../ongoing/ongoing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tcompleted-training',
  templateUrl: './tcompleted-training.component.html',
  styleUrls: ['./tcompleted-training.component.css']
})
export class TcompletedTrainingComponent implements OnInit {

  userTraining: TrainingDetails[];

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
