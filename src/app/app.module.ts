import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteService } from '../services/quote.service';
import { HttpClientModule } from '@angular/common/http';
import { QuoteContainer } from './containers/quote.container';
import { QuoteComponent } from './components/quote-component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteContainer,
    QuoteComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'quote', component: QuoteContainer },
      { path: '', redirectTo:'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [
    QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }