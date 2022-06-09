import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientcardComponent } from './clientcard/clientcard.component';
import { CreateclientComponent } from './createclient/createclient.component';

import { OfferscardComponent } from './offerscard/offerscard.component';
import { ClientScheduleComponent } from './client-schedule/client-schedule.component';
import { CreateAnnotationsComponent } from './create-annotations/create-annotations.component';
import { CreateOffersComponent } from './create-offers/create-offers.component';
import { ModifyOfferComponent } from './modify-offer/modify-offer.component';
import { CreateEstimatesComponent } from './create-estimates/create-estimates.component';

import { ModifyEstimateComponent } from './modify-estimate/modify-estimate.component';
import { SendEmalComponent } from './send-emal/send-emal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ClientlistComponent,
    ClientcardComponent,
    CreateclientComponent,
    OfferscardComponent,
    ClientScheduleComponent,
    CreateAnnotationsComponent,
    CreateOffersComponent,
    ModifyOfferComponent,
    CreateEstimatesComponent,
    ModifyEstimateComponent,
    SendEmalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
