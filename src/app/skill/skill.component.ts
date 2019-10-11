import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertService } from '../service/alert.service';
import { TechnologiesService } from '../technologies/technologies.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
 
  registerForm: FormGroup;
  loading = false;
  submitted = false;
 
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private technology: TechnologiesService,
      private alertService: AlertService) { }

  
      ngOnInit() {
      this.authenticate();
          this.registerForm = this.formBuilder.group({
              mentorId: [''],
              mentorName: [''],
              rating:[4],
              noOfTrainingsCompleted: [2],
              technologyName: ['', [Validators.required]],
              fee:['',Validators.required],
              duration:['',Validators.required],
              startTime:['',Validators.required],
              endTime:['',Validators.required],
          });
      }
  public authenticate()
  {

    var myObj = JSON.parse(window.localStorage.getItem("user"));
   
    if(myObj==null||myObj.role!="mentor")
    {
      this.router.navigate(['/logins']);
    }
  }
     
      get f() { return this.registerForm.controls; }
  
      public register() {
          this.submitted = true;
  
         
          if (this.registerForm.invalid) {
              return;
          }
          var user=JSON.parse(window.localStorage.getItem('user'));
          this.loading = true;
          this.registerForm.controls['mentorId'].setValue(user.mentorId);
          this.registerForm.controls['mentorName'].setValue(user.mentorName);
          this.technology.createUser(this.registerForm.value)
              .subscribe(data => {
                
                      this.alertService.success('Registration successful', true);
                      alert("Skills updated");
                      this.router.navigate(['/trainerhome']);
               
                
                  }),
                  error => {
                      this.alertService.error(error);
                      this.loading = false;
                      this.router.navigate(['/trainerhome'])
                  };
                
                
                
                }
                
   
    
      public cancel()
      {
        this.router.navigate(["/trainerhome"]);
      }
}
