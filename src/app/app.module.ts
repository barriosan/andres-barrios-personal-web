import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

//Serivces

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardTopNavbarComponent } from './pages/dashboard/components/dashboard-top-navbar/dashboard.top.navbar.component';
import { DashboardSideNavbarComponent } from './pages/dashboard/components/dashboard-side-nav/dashboard.side.nav.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { ProjectsComponent } from './pages/home/projects/projects.component';
import { AboutComponent } from './pages/home/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashHomeComponent } from './pages/dashboard/pages/dash-home/dash.home.component';
import { NewsFeedComponent } from './pages/dashboard/pages/dash-home/components/news-feed/news.feed.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardTopNavbarComponent,
    DashboardSideNavbarComponent,
    NavbarComponent,
    IntroComponent,
    ProjectsComponent,
    AboutComponent,
    DashboardComponent,
    DashHomeComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
