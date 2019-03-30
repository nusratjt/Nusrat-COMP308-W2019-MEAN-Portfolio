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

  displayProjectList(): void {
    this.projectListService.getList().subscribe(data => {
      if(data.success) {
        console.log(data);
        this.projects = data.projectList;
      } else {
        this.flashMessage.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

}
