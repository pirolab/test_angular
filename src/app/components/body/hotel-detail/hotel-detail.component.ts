import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { faClose ,faRotateRight} from '@fortawesome/free-solid-svg-icons';
import { MatCarousel, MatCarouselComponent } from 'material2-carousel';


@Component({
  selector: 'hotel-detail',
  templateUrl:'./hotel-detail.component.html',
  styleUrls : [
    './hotel-detail.component.scss',
  ],
})
export class HotelDetailComponent implements OnInit {
  faClose = faClose;
  cgindex : number | any;
  @Input() hotelDetailResults : any;
  @Input() hotelDetailImages : any;
  @Input() setHidden : any;


  constructor( ){}

  ngOnInit() {}


  removeRow(index:number){
    this.hotelDetailImages.splice(index,1);
  }

  close(){
    this.hotelDetailResults = null;
    this.hotelDetailImages = null;

  }

}
