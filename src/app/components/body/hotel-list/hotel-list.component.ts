import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import {faArrowRight , faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../services/body.service";

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: [
    './hotel-list.component.scss',
  ],
})

export class HotelListComponent implements OnInit {
  faLocationArrow = faLocationArrow;
  faArrowRight = faArrowRight;
  getDetail: any;
  getDetailImages: any;
  @Input() destinationId : any;
  @Input() searchVal : any
  @Input() pageNumber : any;
  @Input() searchResults : any;
  @Input() defaultDestId : any;
  @Input() apiBody : any;
  @Output() isVisible =  new EventEmitter<any>();
  @Output() showPage =   new EventEmitter<any>();


  constructor(private _http: HttpClient, private dataService: DataService) {
  }

  ngOnInit() {}

  showDetail($event: any) {
    this.isVisible.emit(false);
    let params = `id=${$event.hotelId}`;
    this.dataService.getDetailImages(params).subscribe((hotelDetailImages: any) => {
      this.getDetailImages = hotelDetailImages?.hotelImages;
      for (let i = 0; i < this.getDetailImages.length; i++) {
        let hotelImagesUrl = (this.getDetailImages[i].baseUrl).replace("{size}", "w");
        this.getDetailImages[i] = {
          'image': hotelImagesUrl,
        }
      }
    });
    this.dataService.getDetails(params).subscribe((hotelDetail: any) => {
        this.getDetail = hotelDetail.data.body.propertyDescription;
      },
      (err: any) => console.error(err),
      () => {
        this.isVisible.emit(true)
      });
  }

}
