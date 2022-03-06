import {
  Component,
  Input,
  OnInit,
  Renderer2
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
  slideLength : number = 12;
  @Input() hotelDetailResults: any;
  @Input() hotelDetailImages: any;
  @Input() setHidden: any;
  @Input() viewType : boolean;

  constructor(private renderer : Renderer2) {}

  ngOnInit() {}

  close() {
    this.renderer.removeClass(document.body, 'isHidden' );
    this.hotelDetailResults = null;
    this.hotelDetailImages = null;
    this.currentSlideIndex = 0;
  }

}
