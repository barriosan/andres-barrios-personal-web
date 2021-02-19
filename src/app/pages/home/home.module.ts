import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeRoutingModule } from './home.routing.module';

//Serivces

// Components
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    NavbarComponent,
    IntroComponent,
    ProjectsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    HomeRoutingModule
  ],
  providers: [],
  exports:[HomeComponent]
})
export class HomeModule { }
