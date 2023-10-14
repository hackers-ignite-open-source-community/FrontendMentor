import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

  private sub: Subscription = new Subscription; 
  public rating: string = '';
  public CONTENT_THANK_YOU = {
    "title": "Thank you!",
    "subTitle": "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!",
    "ratingSelected": "You selected ${0} our of 5"
  }

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.rating = params['rating'];
      this.CONTENT_THANK_YOU.ratingSelected = this.CONTENT_THANK_YOU.ratingSelected.replace('${0}', this.rating);
    });
  }


}
