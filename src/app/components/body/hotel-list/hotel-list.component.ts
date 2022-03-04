import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from "@angular/core";
import {faArrowRight, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../services/body.service";
import { Observable, map, tap} from "rxjs"

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
  render: any;
  getDetailImages: any;
  imageSize: string = 'z';
  hotelDetail$: Observable<any>;
  hotelImages$: Observable<any>;
  @Input() destinationId: any;
  @Input() searchVal: any
  @Input() pageNumber: any;
  @Input() searchResults: any;
  @Input() defaultDestId: any;
  @Input() apiBody: any;
  @Output() isVisible = new EventEmitter<any>();
  @Output() showPage = new EventEmitter<any>();

  constructor(private _http: HttpClient, private dataService: DataService, private renderer: Renderer2) {
  }

  ngOnInit() {}

  showDetail($event: any): any {
    this.renderer.addClass(document.body, 'isHidden');
    this.isVisible.emit(false);
    let params = `id=${$event.hotelId}`;
    this.dataService.getDetailImages(params).subscribe((hotelDetailImages: any) => {
      this.getDetailImages = hotelDetailImages?.hotelImages;
      this.getDetailImages.forEach((item :any, index : number) => {
        this.getDetailImages[index] = {'image': (item.baseUrl).replace('{size}' , this.imageSize),}
      });
    });
    this.hotelDetail$ = this.dataService
      .getDetails(params)
      .pipe(
        map(hotelDetail =>
          hotelDetail.data.body.propertyDescription
        ),
        tap({
          complete: () => this.isVisible.emit(true)
        })
      )
  }
}
