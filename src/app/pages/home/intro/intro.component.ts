import { Component } from '@angular/core'

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})

export class IntroComponent {
    assetUrl = '../../../assets/andres.jpg'
    introName = 'Andres Barrios'
    position = 'Software Engineer'
}