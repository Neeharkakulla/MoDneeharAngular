import { Component, OnInit } from '@angular/core';
import { TechnologiesDetails } from '../models/technologies.model';

import { Router } from '@angular/router';
import { TechnologiesService } from '../technologies/technologies.service';
import { OngoiningService } from '../ongoing/ongoing.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {
  registerForm: FormGroup;
  
AItech:TechnologiesDetails[];
MLtech:TechnologiesDetails[];
 
  technologies:TechnologiesDetails[];
 
  constructor(private routers:Router,private technologiesService:TechnologiesService,
    private formBuilder: FormBuilder,private trainingService:OngoiningService) { }

  ngOnInit() {
    this.getAll();
    this.registerForm = this.formBuilder.group({
      status: ['false'],
      progress: ['0'],
      comissionAmount:['1000'],
      fee: [''],
      rating: [''],
      averageRating:[''],
      startDate:[''],
      endDate:[''],
      startTime:[''],
      endTime:[''],
      userId:[''],
      userName:[''],
      mentorId:[''],
      mentorName:[''],
      technologyName:['']
  });
  }
  
  public propose(mentor)
  {
    var myObj = JSON.parse(window.localStorage.getItem("user"));
   
    if(myObj==null||myObj.role!="user")
    {
      this.routers.navigate(['/logins']);
    }
    else{
      this.registerForm.controls['status'].setValue(false);
      this.registerForm.controls['progress'].setValue(0);
      this.registerForm.controls['comissionAmount'].setValue(1000);
      this.registerForm.controls['fee'].setValue(mentor.fee);
      this.registerForm.controls['rating'].setValue(mentor.rating);
      this.registerForm.controls['averageRating'].setValue(mentor.rating);
      this.registerForm.controls['startDate'].setValue('2019-10-10');
      this.registerForm.controls['endDate'].setValue('2019-11-10');
      this.registerForm.controls['startTime'].setValue(mentor.startTime);
      this.registerForm.controls['endTime'].setValue(mentor.endTime);
      this.registerForm.controls['userId'].setValue(myObj.userId);
      this.registerForm.controls['userName'].setValue(myObj.firstName);
      this.registerForm.controls['mentorId'].setValue(mentor.mentorId);
      this.registerForm.controls['mentorName'].setValue(mentor.mentorName);
      this.registerForm.controls['technologyName'].setValue(mentor.technologyName);
      this.trainingService.createUser(this.registerForm.value).subscribe(data=>
        {
          
        });
    }
  } 
 
  public getAll()
  {
    this.technologiesService.getAllMentors('AI').subscribe(data=>
      {
        this.AItech=data;
      }
    );
    this.technologiesService.getAllMentors('ML').subscribe(data=>
      {
        this.MLtech=data;
      }
    );
  }  
 
  
  

}
