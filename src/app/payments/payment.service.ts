import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentDetails } from '../models/payment.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PaymentService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8084/payment/payment';
  

  public getAllPayments() {
    return this.http.get<PaymentDetails[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }
 
  
  public createUser(user) {
    return this.http.post(this.userUrl, user);
  }

}
