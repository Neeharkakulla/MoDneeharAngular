import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserlistService } from '../userslist/userslist.service';

@Component({
  selector: 'app-mlogin',
  templateUrl: './mlogin.component.html',
  styleUrls: ['./mlogin.component.css']
})
export class MloginComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  password: string;
  
  constructor(private router: Router,
    private formBuilder: FormBuilder,private signinService:UserlistService) { }

  ngOnInit() {
    window.localStorage.clear();
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }
  login() : void {
  
    if(this.username==""||this.username==null)
    {
      alert('Please enter the user name!');
      this.router.navigate(['/ulogin']);
    }
    else if(this.password==""||this.password==null)
    {
      alert('Please enter Password!');
      this.router.navigate(['/ulogin']);
    }
    else
    this.authenticateMentor(this.username,this.password,'mentor');
  }
  public authenticateMentor(username,password,role)
  {
   
    
    this.signinService.authenticate(username,password,role).subscribe(data=>{
      if(data==null)
      {
        alert("Invalid Credentials");
        this.router.navigate(['/logins']);
      }
      else
      {
        window.localStorage.setItem("user", JSON.stringify(data));
       
       
                  this.router.navigate(['/trainerhome']);
      }
    });
  }
public cancel()
{
  this.router.navigate(['/logins']);
}
public signup()
{
  this.router.navigate(['/mentor-signup']);
}
}
