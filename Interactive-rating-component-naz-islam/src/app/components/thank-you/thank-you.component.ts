import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

  // @Input() rating = 0;

  public CONTENT_THANK_YOU = {
    "title": "Thank you!",
    "subTitle": "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!",
    "ratingSelected": "You selected ${0} our of 5"
  }

}
