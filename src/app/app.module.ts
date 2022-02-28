import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from  './components/header/header.component';
import { BodyComponent } from  './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HotelSearchComponent } from "./components/body/hotel-search/hotel-search.component";
import {HotelDetailComponent} from "./components/body/hotel-detail/hotel-detail.component";
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoaderComponent,
    HotelSearchComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    FontAwesomeModule,
    MatCarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
