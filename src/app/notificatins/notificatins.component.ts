import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngoiningService } from '../ongoing/ongoing.service';
import { TrainingDetails } from '../models/training.model';

@Component({
  selector: 'app-notificatins',
  templateUrl: './notificatins.component.html',
  styleUrls: ['./notificatins.component.css']
})
export class NotificatinsComponent implements OnInit {

  userTraining: TrainingDetails[];

  constructor(private routers:Router,private onginingService:OngoiningService) { }

  ngOnInit() {
    this.authenticateMentor();
    this.getMentor();
     }
     public authenticateMentor()
     {
       
       var myObj = JSON.parse(window.localStorage.getItem("user"));
       //console.log(myObj);
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
      public accept(user)
      {
        this.onginingService.updateStatus(user).subscribe(data=>
          {
            
            this.userTraining=data;
            alert("Accepted");
          });
      }
      public reject(user)
      {
        this.onginingService.deleteUser(user).subscribe(data=>
          {
            alert("Succesfully Removed");
            this.routers.navigate(['/trainerhome']);
          });
      }
}
