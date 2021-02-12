import { Component } from '@angular/core';

@Component({
    selector: 'projects',
    templateUrl: './projects.components.html'
})

export class ProjectsComponent {
    projects = ['Project 1', 'Project 2', 'Project 3']
}