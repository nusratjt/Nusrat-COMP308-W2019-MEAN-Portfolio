
/**
  * file name: client/src/app/app.module.ts
  * auther's name : Tom Tsiliopoulos
  * modified by: Nusrat Jahan
  * Student Id: 300967157
  * Date: April 04, 2019
  */



// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectDeleteComponent } from './projects/project-delete/project-delete.component';

// Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

// Route Guards
import { AuthGuard } from './guards/auth.guard';


export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ServiceComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProjectListComponent,
    RegisterComponent,
    LoginComponent,
    ProjectDetailsComponent,
    ProjectDeleteComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactDeleteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
