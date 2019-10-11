import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginsComponent } from './logins/logins.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { AloginComponent } from './alogin/alogin.component';
import { SignupComponent } from './signup/signup.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { WebComponent } from './web/web.component';
import { CloudComponent } from './cloud/cloud.component';
import { IotComponent } from './iot/iot.component';
import { TrainerhomeComponent } from './trainerhome/trainerhome.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { CompletedTrainingComponent } from './completed-training/completed-training.component';
import { SkillComponent } from './skill/skill.component';
import { TcurrentTrainingComponent } from './tcurrent-training/tcurrent-training.component';
import { TcompletedTrainingComponent } from './tcompleted-training/tcompleted-training.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserslistComponent } from './userslist/userslist.component';
import { OngoingComponent } from './ongoing/ongoing.component';
import { PaymentsComponent } from './payments/payments.component';
import { UserlistService } from './userslist/userslist.service';
import {  HttpClientModule } from '@angular/common/http';
import { OngoiningService } from './ongoing/ongoing.service';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologiesService } from './technologies/technologies.service';
import { PaymentService } from './payments/payment.service';
import { AlertService } from './service/alert.service';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { AWSComponent } from './aws/aws.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewtechnologyComponent } from './newtechnology/newtechnology.component';
import { NotificatinsComponent } from './notificatins/notificatins.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserhomeComponent,
    NavigationComponent,
    LoginsComponent,
    UloginComponent,
    MloginComponent,
    AloginComponent,
    SignupComponent,
    
    FullstackComponent,
    WebComponent,
    CloudComponent,
    IotComponent,
    TrainerhomeComponent,
    CurrentTrainingComponent,
    CompletedTrainingComponent,
    SkillComponent,
    TcurrentTrainingComponent,
    TcompletedTrainingComponent,
    AdminhomeComponent,
    UserslistComponent,
    OngoingComponent,
    PaymentsComponent,
    TechnologiesComponent,
    MentorSignupComponent,
    AWSComponent,
    NewtechnologyComponent,
    NotificatinsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserlistService,
    OngoiningService,
    TechnologiesService,
    PaymentService,
    AlertService,
   ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
