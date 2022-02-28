import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { faClose ,faRotateRight} from '@fortawesome/free-solid-svg-icons';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';


@Component({
  selector: 'hotel-detail',
  templateUrl:'./hotel-detail.component.html',
  styleUrls : [
    './hotel-detail.component.scss',
  ],
})
export class HotelDetailComponent implements OnInit {
  faClose = faClose;
  @Input() hotelDetailResults : any;
  @Input() hotelDetailImages : any;
  @Input() setHidden : any;


  constructor( ){}

  ngOnInit() {}


  close(){
    this.hotelDetailResults = null;
    this.hotelDetailImages = null;
  }

}
