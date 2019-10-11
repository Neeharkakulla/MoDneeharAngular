import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { TcompletedTrainingComponent } from './tcompleted-training/tcompleted-training.component';
import { TcurrentTrainingComponent } from './tcurrent-training/tcurrent-training.component';
import { SkillComponent } from './skill/skill.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserslistComponent } from './userslist/userslist.component';
import { OngoingComponent } from './ongoing/ongoing.component';
import { PaymentsComponent } from './payments/payments.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { Observable } from 'rxjs';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { AWSComponent } from './aws/aws.component';
import { NewtechnologyComponent } from './newtechnology/newtechnology.component';
import { NotificatinsComponent } from './notificatins/notificatins.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'AWS',
    component:AWSComponent,
  },
  {
    path: 'home',
    component: HomeComponent,

  
  },
  {
    path:'notification',
    component:NotificatinsComponent,
  },
  {
    path:'addtech',
    component:NewtechnologyComponent,
  },
  {
    path:'mentor-signup',
    component:MentorSignupComponent,
  },
  {
    path:'userhome',
    component:UserhomeComponent,
    
  },
  {
    path:'trainerhome',
    component:TrainerhomeComponent,
    
  },
  {
    path:'navigation',
    component:NavigationComponent,
    
  },
  {
    path:'logins',
    component:LoginsComponent,
    
  },
  {
    path:'Ulogin',
    component:UloginComponent,
    
  },
  {
    path:'Mlogin',
    component:MloginComponent,
    
  },
  {
    path:'Alogin',
    component:AloginComponent,
    
  },
  {
    path:'signup',
    component:SignupComponent,
    
  },
  
  {
    path:'fullstack',
    component:FullstackComponent,
    
  }
  ,
  {
    path:'web',
    component:WebComponent,
    
  }
  ,
  {
    path:'cloud',
    component:CloudComponent,
    
  }
  ,
  {
    path:'iot',
    component:IotComponent,
    
    },
    {
      path:'current_training',
      component:CurrentTrainingComponent,
      

    },
    {
      path:'completed_training',
      component:CompletedTrainingComponent,
      
    },
  {
    path:'Tcompleted-training',
    component:TcompletedTrainingComponent,
    
  },
  {
    path:'Tcurrent-training',
    component:TcurrentTrainingComponent,
    
  },
  {
    path:'skill',
    component:SkillComponent,
    
  },
  {
    path:'adminhome',
    component:AdminhomeComponent,
    
  },
  {
    path:'userslist',
    component:UserslistComponent,
    
  },
  {
    path:'technologies',
    component:TechnologiesComponent,
    
    
  },
  {
    path:'ongoing',
    component:OngoingComponent,
    
  },
  {
    path:'payments',
    component:PaymentsComponent,
    
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
    
  ],
 
})
export class AppRoutingModule { }
