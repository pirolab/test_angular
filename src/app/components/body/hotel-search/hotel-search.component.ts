import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import {DataService} from "../body.service";
import { faLocationPin ,faRotateRight} from '@fortawesome/free-solid-svg-icons';
import {Constants} from "../../../config/constants";

@Component({
  selector: 'hotel-search',
  templateUrl:'./hotel-search.component.html',
  styleUrls : ['./hotel-search.component.scss'],

})
export class HotelSearchComponent implements OnInit {
  faLocationPin = faLocationPin;
  faRotateRight = faRotateRight;
  defaultDestId : number = Constants.API_DEST_ID;
  searchResult : any;
  placeHolder : string = 'Search: name of countries, cities, districts, places, etc…';

  @Input() destinationId : number | undefined;
  @Input() pageNumber : number| undefined;
  @Output() searchValue = new EventEmitter<any>();
  @Output() showPage = new EventEmitter<any>();
  @Output() isVisible = new EventEmitter<any>();
  @ViewChild('inputRef')inputRef!: ElementRef;

  constructor( private dataService : DataService){}

  ngOnInit() {}

  resetSearch() {
    this.showPage.emit({pageNumber : 1, destinationId : this.defaultDestId});
    this.searchValue.emit('');
    this.inputRef.nativeElement.value = '';
    this.searchResult = '';
  }
  searchHotel (query : string){
    this.isVisible.emit(false);
    let params = `query=${query}`
    this.dataService.searchData(params).subscribe((hotelSearch : any)  => {
        this.searchResult = hotelSearch?.suggestions[0].entities || null;
        this.searchValue.emit(this.searchResult);
      },
      (err : any) => console.error(err),
      () => this.isVisible.emit(true));
  }

}
