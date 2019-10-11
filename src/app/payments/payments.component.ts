import { Component, OnInit } from '@angular/core';
import { PaymentDetails } from '../models/payment.model';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments:PaymentDetails[];
  constructor(private routes:Router,private paymenService:PaymentService) { }

  // ngOnInit() {
  //   this.getAll();
  // }
  ngOnInit() {
    this.authenticateMentor();
    this.getAll();
     }
     public authenticateMentor()
     {
       
       var myObj = JSON.parse(window.localStorage.getItem("user"));
       //console.log(myObj);
       if(myObj==null||myObj.role!="admin")
       {
         this.routes.navigate(['/logins']);
       }
      }
       

  public getAll()
  {
    this.paymenService.getAllPayments().subscribe(data=>
      {
        this.payments=data;
      });
  }

}
