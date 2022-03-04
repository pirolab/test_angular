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
  carouselShow : boolean = false;
  @Input() hotelDetailResults: any;
  @Input() hotelDetailImages: any;
  @Input() setHidden: any;

  constructor(private renderer : Renderer2) {}

  ngOnInit() {}

  callBack(){
    this.carouselShow = true;
  }
  close() {
    this.renderer.removeClass(document.body, 'isHidden' );
    this.hotelDetailResults = null;
    this.hotelDetailImages = null;
    this.currentSlideIndex = 0;
    this.carouselShow = false;
  }

}
