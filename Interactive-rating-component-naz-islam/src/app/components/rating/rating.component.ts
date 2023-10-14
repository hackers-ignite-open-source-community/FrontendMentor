import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

  public rating: string = '';
  
  constructor(
    private router: Router
  ) {

  }

  public CONTENT_RATING = {
    "title": "How did we do?",
    "subTitle": "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
    "ratingOne": "1",
    "ratingTwo": "2",
    "ratingThree": "3",
    "ratingFour": "4",
    "ratingFive": "5",
    "buttonText": "SUBMIT",
  }

  public onSubmit() {
    console.log('--> rating', this.rating);
    this.router.navigate(['thank-you', this.rating]);
  }

}
