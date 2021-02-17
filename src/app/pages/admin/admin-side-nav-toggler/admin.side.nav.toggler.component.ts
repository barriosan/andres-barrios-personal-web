import { Component, OnInit } from '@angular/core'

//Services
import { AdminSideNavService } from '../../../services/admin-side-nav.service';

@Component({
    selector: 'admin-side-nav-toggler',
    templateUrl: './admin.side.nav.toggler.component.html'
})

export class AdminSideNavTogglerComponent implements OnInit {

    constructor(public adminSideNavService: AdminSideNavService) {}

    ngOnInit(){
    }
}