import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientScheduleComponent } from './client-schedule/client-schedule.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { CreateclientComponent } from './createclient/createclient.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ClientlistComponent },
  { path: 'newClient', component: CreateclientComponent },
  { path: 'clientSchedule/:id', component: ClientScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
