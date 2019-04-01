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

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
