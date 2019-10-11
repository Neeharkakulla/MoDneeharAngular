import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserlistService } from './userslist.service';
import { Userlist } from '../models/userslist.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  users: Userlist[];

  constructor(private router: Router, private userlistService: UserlistService) {

  }

  ngOnInit() {
    this.getAll();
  }
  submit(user){
   
    this.userlistService.block(user).subscribe(res=>{
      if(res){
this.getAll();
        
      }
    });
   
  
    
  }

  getAll(){
    this.userlistService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }
 
}
