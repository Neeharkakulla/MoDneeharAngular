import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
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
      if(myObj==null||myObj.role!="admin")
      {
        this.router.navigate(['/logins']);
      }
      
    }
    public logout()
    {
      window.localStorage.clear();
      this.router.navigate(["/home"]);
    }

 

}
