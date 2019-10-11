import { Component, OnInit } from '@angular/core';
import { TechnologiesDetails } from '../models/technologies.model';
import { TechnologiesService } from './technologies.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies:TechnologiesDetails[];
  
 
  constructor(private routers:Router,private technologiesService:TechnologiesService,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.authenticateAdmin();
    
    this.getAll();
  }
  public authenticateAdmin()
  {
    
    var myObj = JSON.parse(window.localStorage.getItem("user"));
    //console.log(myObj);
    if(myObj==null||myObj.role!="admin")
    {
      this.routers.navigate(['/logins']);
    }
    
  }
  public getAll()
  {
    this.technologiesService.getAllTechnologies().subscribe(data=>
      {
        this.technologies=data;
      }
    );
  }
  public add()
    {
      this.routers.navigate(['/addtech']);
    }
    public remove(user)
    {
     
      this.technologiesService.deleteUser(user.id).subscribe(data=>
        {
          this.technologies=data;
        }
      );
      
    }
    public edit(user)
    {
      
   this.technologiesService.update(user).subscribe(data=>
    {
      if(data){
      this.technologies=data;
     alert(user.mentorName+" : Fee Successfully Updated" );
      }
    });
     
    }
}
