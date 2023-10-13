import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RatingComponent } from './components/rating/rating.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '', component: RatingComponent},
  {path: 'thank-you', component: ThankYouComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
