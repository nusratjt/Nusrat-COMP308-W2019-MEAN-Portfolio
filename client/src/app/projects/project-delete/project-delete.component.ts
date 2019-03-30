import { Component, OnInit } from '@angular/core';
import { ProjectListService } from 'src/app/services/project-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {

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

    this.deleteProject(this.project);
  }

  private deleteProject(contact: Project): void {
    this.projectListService.deleteProject(contact).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/project/project-list']);
      } else {
        this.flashMessage.show('Delete Project Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/project/project-list']);
      }
    });
  }

}
