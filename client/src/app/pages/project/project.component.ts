/**
  * file name: client/src/app/pages/project/project.component.ts
  * created by: Nusrat Jahan
  * Student Id: 300967157
  * Date: April 04, 2019
  */



import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    private authService: AuthService
    ) {

  }

  ngOnInit() {
  }

  // checks if user is logged in
  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
