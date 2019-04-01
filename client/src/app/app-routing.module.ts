// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectDeleteComponent } from './projects/project-delete/project-delete.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},

  {path: 'project', component: ProjectComponent, data: {title: 'Project'}},
  {path: 'project/project-list', component: ProjectListComponent, data: {title: 'Project List'}, canActivate: [AuthGuard]},
  {path: 'project/project-list/add', component: ProjectDetailsComponent, data: {title: 'Add Project'}, canActivate: [AuthGuard]},
  {path: 'project/project-list/edit/:id', component: ProjectDetailsComponent, data: {title: 'Edit Project'}, canActivate: [AuthGuard]},
  {path: 'project/project-list/delete/:id', component: ProjectDeleteComponent, data: {title: 'Add Project'}, canActivate: [AuthGuard]},

  {path: 'service', component: ServiceComponent, data: {title: 'Service'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'login'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
