import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LoginComponent } from './login/login.component';
import { SignupMentorComponent } from './signup-mentor/signup-mentor.component';
import { SearchComponent } from './search/search.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { NavbaruserComponent } from './shared/navbaruser/navbaruser.component';
import { NavbaradminComponent } from './shared/navbaradmin/navbaradmin.component';
import { PopupsigninComponent } from './popupsignin/popupsignin.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { CurrenttrainingsComponent } from './currenttrainings/currenttrainings.component';
import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { NotifysuccessComponent } from './notifysuccess/notifysuccess.component';
import { MentorlandingComponent } from './mentorlanding/mentorlanding.component';
import { NavbarmentorComponent } from './shared/navbarmentor/navbarmentor.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { CurrenttrainingsmentorComponent } from './currenttrainingsmentor/currenttrainingsmentor.component';
import { CompletedtrainingsmentorComponent } from './completedtrainingsmentor/completedtrainingsmentor.component';
import { AdminComponent } from './admin/admin.component';
import { BlockuserComponent } from './blockuser/blockuser.component';
import { BlockmentorComponent } from './blockmentor/blockmentor.component';
import { PopupblockComponent } from './popupblock/popupblock.component';
import { ReactiveFormsModule } from '@angular/forms';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { HttpClientModule } from '@angular/common/http';
import { LocalsessionService } from './shared/localsession.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupMentorComponent,
    SearchComponent,
    UserlandingComponent,
    NavbaruserComponent,
    NavbaradminComponent,
    PopupsigninComponent,
    SearchuserComponent,
    CurrenttrainingsComponent,
    CompletedtrainingsComponent,
    SearchresultComponent,
    NotifysuccessComponent,
    MentorlandingComponent,
    NavbarmentorComponent,
    EditskillsComponent,
    CurrenttrainingsmentorComponent,
    CompletedtrainingsmentorComponent,
    AdminComponent,
    BlockuserComponent,
    BlockmentorComponent,
    PopupblockComponent,
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule

  ],
  providers: [LocalsessionService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
