import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RatingComponent } from './components/rating/rating.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '', component: RatingComponent},
  {path: 'thank-you/:rating', component: ThankYouComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
