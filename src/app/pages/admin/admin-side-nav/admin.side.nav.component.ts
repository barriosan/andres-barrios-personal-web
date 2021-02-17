import { Component, OnInit } from '@angular/core'
import { AdminSideNavService } from '../../../services/admin-side-nav.service'

@Component({
    selector: 'admin-side-navbar',
    templateUrl: './admin.side.nav.component.html'
})

export class AdminSideNavbarComponent implements OnInit {

    constructor(public adminSideNavService: AdminSideNavService){}

    ngOnInit(){
    }
}