import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerhome',
  templateUrl: './trainerhome.component.html',
  styleUrls: ['./trainerhome.component.css']
})
export class TrainerhomeComponent implements OnInit {

  constructor(private router:Router) {
   
    this.authenticateMentor();
   }

  ngOnInit() {
   this.authenticateMentor();
    }
     public authenticateMentor()
      {
       var myObj = JSON.parse(window.localStorage.getItem("user"));
       //console.log(myObj);
       if(myObj==null||myObj.role!="mentor")
       {
         this.router.navigate(['/logins']);
       }
      }

}
