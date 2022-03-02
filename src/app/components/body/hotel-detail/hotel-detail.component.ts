import {
  Component, EventEmitter,
  Input,
  OnInit, Output,
} from "@angular/core";
import {faClose} from '@fortawesome/free-solid-svg-icons';
import {MatCarousel, MatCarouselComponent} from 'material2-carousel';


@Component({
  selector: 'hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: [
    './hotel-detail.component.scss',
  ],
})
export class HotelDetailComponent implements OnInit {
  faClose = faClose;
  currentSlideIndex = 0;
  @Input() hotelDetailResults: any;
  @Input() hotelDetailImages: any;
  @Input() setHidden: any;

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.hotelDetailResults = null;
    this.hotelDetailImages = null;
    this.currentSlideIndex = 0;
  }

}
