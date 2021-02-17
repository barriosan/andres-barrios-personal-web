import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
