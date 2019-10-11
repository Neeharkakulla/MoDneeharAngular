import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private router:Router)

{}
  ngOnInit() {
    this.authenticateMentor();
     }
     public authenticateMentor()
     {
      var myObj = JSON.parse(window.localStorage.getItem("user"));
     // console.log(myObj);
      if(myObj==null||myObj.role!="user")
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
