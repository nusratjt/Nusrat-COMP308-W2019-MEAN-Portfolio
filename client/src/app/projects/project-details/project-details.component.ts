import { Component, OnInit } from '@angular/core';
import { ProjectListService } from 'src/app/services/project-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {

  title: string;
  project: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private projectListService: ProjectListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.project = new Project();

    this.activatedRoute.params.subscribe(params => {
      this.project._id = params.id;
    });

    if (this.title === 'Edit Project') {
      this.getProject(this.project);
    }
  }

  private getProject(project: Project): void {
    this.projectListService.getProject(project).subscribe(data => {
      this.project = data.project;
    });
  }

  onDetailsPageSubmit(): void {
    switch (this.title) {
      case 'Add Project':
      this.projectListService.addProject(this.project).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/project/project-list']);
        } else {
          this.flashMessage.show('Add Project Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/project/project-list']);
        }
      });
      break;

      case 'Edit Project':
      this.projectListService.editProject(this.project).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/project/project-list']);
        } else {
          this.flashMessage.show('Edit Project Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/project/project-list']);
        }
      });
      break;
    }
  }

}
