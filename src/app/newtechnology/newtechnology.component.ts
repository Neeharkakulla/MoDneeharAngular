import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertService } from '../service/alert.service';
import { TechnologiesService } from '../technologies/technologies.service';

@Component({
  selector: 'app-newtechnology',
  templateUrl: './newtechnology.component.html',
  styleUrls: ['./newtechnology.component.css']
})
@Component({templateUrl: 'newtechnology.component.html'})
export class NewtechnologyComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
 
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private technology: TechnologiesService,
      private alertService: AlertService) { }

  
      ngOnInit() {
        window.localStorage.clear();
          this.registerForm = this.formBuilder.group({
              mentorId: ['', [Validators.required,Validators.email]],
              mentorName: ['', Validators.required],
              rating:['',Validators.required],
              noOfTrainingsCompleted: ['', [Validators.required]],
              technologyName: ['', [Validators.required]],
              fee:['',Validators.required],
              duration:['',Validators.required],
              startTime:['',Validators.required],
              endTime:['',Validators.required],
          });
      }
  
     
      get f() { return this.registerForm.controls; }
  
      public register() {
          this.submitted = true;
  
         
          if (this.registerForm.invalid) {
              return;
          }
          
          this.loading = true;
        
         
          this.technology.createUser(this.registerForm.value)
              .subscribe(data => {
                
                      this.alertService.success('Registration successful', true);
                      this.router.navigate(['/technologies']);
               
                
                  }),
                  error => {
                      this.alertService.error(error);
                      this.loading = false;
                      this.router.navigate(['/technologies'])
                  };
                
                
                
                }
                
   
    
      public cancel()
      {
        this.router.navigate(["/logins"]);
      }
     

}
