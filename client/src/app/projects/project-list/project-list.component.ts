/**
  * file name: client/src/app/projects/project-list/project-list.component.ts
  * auther's name : Tom Tsiliopoulos
  * modified by: Nusrat Jahan
  * Student Id: 300967157
  * Date: April 04, 2019
  */

import { Component, OnInit } from '@angular/core';
import { ProjectListService } from 'src/app/services/project-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];


  constructor(
    private projectListService: ProjectListService,
    private flashMessage: FlashMessagesService,
    private router: Router

  ) { }

  ngOnInit() {

    this.projects = new Array<Project>();

    this.displayProjectList();
  }

  // functions when project is deleted
  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')) {
      this.router.navigate(['/project/project-list']);
    }
  }

  // functions to display the project list
  displayProjectList(): void {
    this.projectListService.getList().subscribe(data => {
      if(data.success) {
        this.projects = data.projectList;
        // when user is not logged in
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

}
