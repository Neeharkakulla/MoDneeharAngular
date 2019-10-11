import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserlistService } from '../userslist/userslist.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {
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
    this.authenticateAdmin(this.username,this.password,'admin');
  }
  public authenticateAdmin(username,password,role)
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
         
         
                    this.router.navigate(['/adminhome']);
        }
      })
    }
    public cancel()
    {
      this.router.navigate(['/logins'])
    }
}
