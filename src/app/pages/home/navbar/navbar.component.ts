import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent {
    navbarName = 'Andres Barrios';
    navBarLinks = ['Home', 'Projects', 'About', 'Test']
}