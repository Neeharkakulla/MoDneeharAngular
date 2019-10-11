import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngoiningService } from './ongoing.service';
import { TrainingDetails } from '../models/training.model';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.css']
})
export class OngoingComponent implements OnInit {
  ongoining:TrainingDetails[];
  constructor(private routers:Router,private onginingService:OngoiningService) { }

  ngOnInit() {
    this.authenticateAdmin();
    this.getAll();
  }
  public authenticateAdmin()
  {
    
    var myObj = JSON.parse(window.localStorage.getItem("user"));
    //console.log(myObj);
    if(myObj==null||myObj.role!="admin")
    {
      this.routers.navigate(['/logins']);
    }
    
  }
  public getAll()
  {
    this.onginingService.getAllTraining().subscribe(data=>
      {
        this.ongoining=data;
      }
    );
  }

}
