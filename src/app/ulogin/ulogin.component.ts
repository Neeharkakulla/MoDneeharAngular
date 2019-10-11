import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserlistService } from '../userslist/userslist.service';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {

  
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
      alert('Please enter the user name !');
      this.router.navigate(['/ulogin']);
    }
    else if(this.password==""||this.password==null)
    {
      alert('Please enter the Password!');
      this.router.navigate(['/ulogin']);
    }
    else
    this.authenticateUser(this.username,this.password,'user');
  }

  public authenticateUser(username,password,role)
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
       
       
                  this.router.navigate(['/userhome']);
      }
    })
  }

  public cancel()
{
  this.router.navigate(['/logins']);
}
public signup()
{
  this.router.navigate(['/signup']);
}
}
