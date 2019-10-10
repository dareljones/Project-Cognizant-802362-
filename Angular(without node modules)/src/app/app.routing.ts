import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SignupMentorComponent } from './signup-mentor/signup-mentor.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { CurrenttrainingsComponent } from './currenttrainings/currenttrainings.component';
import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { MentorlandingComponent } from './mentorlanding/mentorlanding.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { CurrenttrainingsmentorComponent } from './currenttrainingsmentor/currenttrainingsmentor.component';
import { CompletedtrainingsmentorComponent } from './completedtrainingsmentor/completedtrainingsmentor.component';
import { AdminComponent } from './admin/admin.component';
import { BlockuserComponent } from './blockuser/blockuser.component';
import { BlockmentorComponent } from './blockmentor/blockmentor.component';


const routes: Routes =[
    { path: 'home',             component: LandingComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'registermentor',    component: SignupMentorComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'search',          component: SearchComponent },
    { path: 'userlanding',          component: UserlandingComponent },
    { path: 'searchuser',          component: SearchuserComponent },
    { path: 'currenttrainings',          component: CurrenttrainingsComponent },
    { path: 'completedtrainings',          component: CompletedtrainingsComponent },
    { path: 'searchresult',          component: SearchresultComponent },
    { path: 'mentorlanding',          component: MentorlandingComponent },
    { path: 'editskills',          component: EditskillsComponent },
    { path: 'currenttrainingsmentor',          component: CurrenttrainingsmentorComponent },
    { path: 'completedtrainingsmentor',          component: CompletedtrainingsmentorComponent },
    { path: 'admin',             component: AdminComponent },
    { path: 'blockuser',             component: BlockuserComponent },
    { path: 'blockmentor',             component: BlockmentorComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
