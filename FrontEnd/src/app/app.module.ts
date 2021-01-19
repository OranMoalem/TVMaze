import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
  TvShowsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TvShowsComponent]
})
export class AppModule { }
