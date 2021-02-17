import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

//Serivces
import { AdminSideNavService } from './services/admin-side-nav.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminTopNavbarComponent } from './pages/admin/admin-top-navbar/admin.top.navbar.component';
import { AdminSideNavTogglerComponent } from './pages/admin/admin-side-nav-toggler/admin.side.nav.toggler.component';
import { AdminSideNavbarComponent } from './pages/admin/admin-side-nav/admin.side.nav.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { ProjectsComponent } from './pages/home/projects/projects.component';
import { AboutComponent } from './pages/home/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminTopNavbarComponent,
    AdminSideNavTogglerComponent,
    AdminSideNavbarComponent,
    NavbarComponent,
    IntroComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AdminSideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
