import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DashboardRoutingModule } from './dashboard.routing.module';

//Serivces

// Components
import { DashboardComponent} from './dashboard.component';
import { DashHomeComponent } from './pages/dash-home/dash.home.component';
import { DashboardTopNavbarComponent } from './components/dashboard-top-navbar/dashboard.top.navbar.component';
import { DashboardSideNavbarComponent } from './components/dashboard-side-nav/dashboard.side.nav.component';
import { NewsFeedComponent } from './pages/dash-home/components/news-feed/news.feed.component';
import { WatcherComponent } from './pages/dash-home/components/watcherr/watcher.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashHomeComponent,
    DashboardTopNavbarComponent,
    DashboardSideNavbarComponent,
    NewsFeedComponent,
    WatcherComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    DashboardRoutingModule
  ],
  providers: [],
  exports: [DashboardComponent]
})
export class DashboardModule { }
