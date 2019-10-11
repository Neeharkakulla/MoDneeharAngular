import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertService } from '../service/alert.service';
import { UserlistService } from '../userslist/userslist.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
@Component({templateUrl: 'signup.component.html'})
export class SignupComponent implements OnInit {

 
  registerForm: FormGroup;
  loading = false;
  submitted = false;
 
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserlistService,
      private alertService: AlertService) { }

  
      ngOnInit() {
        window.localStorage.clear();
          this.registerForm = this.formBuilder.group({
              firstName: ['', Validators.required],
              lastName: ['', Validators.required],
              contactNumber:['',Validators.required],
              userId: ['', [Validators.required,Validators.email]],
              password: ['', [Validators.required, Validators.minLength(6)]],
              role:['user'],
              active:['true'],
              lastPasswordUpdate:[new Date()]
          });
      }
  
     
      get f() { return this.registerForm.controls; }
  
      public register() {
          this.submitted = true;
  
         
          if (this.registerForm.invalid) {
              return;
          }
          this.checkUser();
          this.loading = true;
        
         
          this.userService.createUser(this.registerForm.value)
              .subscribe(data => {
                
                      this.alertService.success('Registration successful', true);
                      this.router.navigate(['/logins']);
               
                
                  }),
                  error => {
                      this.alertService.error(error);
                      this.loading = false;
                      this.router.navigate(['/signup'])
                  };
                
                
                
                }
                
    public checkUser()
    {
      this.userService.getUser(this.registerForm.value)
      .subscribe(data => {
        
             if(!data)
             {
               
               this.router.navigate(['/signup']);
               alert("User Already exists");
             }
        
          });
    }
      public cancel()
      {
        this.router.navigate(["/logins"]);
      }
      public mentor()
      {
        this.router.navigate(["/mentor-signup"]);
      }
  }
  