import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import {DataService} from "../../services/body.service";
import { faLocationPin ,faRotateRight, faSearch} from '@fortawesome/free-solid-svg-icons';
import {Constants} from "../../../config/constants";

@Component({
  selector: 'hotel-search',
  templateUrl:'./hotel-search.component.html',
  styleUrls : ['./hotel-search.component.scss'],

})
export class HotelSearchComponent implements OnInit {
  faLocationPin = faLocationPin;
  faRotateRight = faRotateRight;
  faSearch = faSearch;
  defaultDestId : number = Constants.API_DEST_ID;
  searchResult : any;
  placeHolder : string = 'Search: name of countries, cities, districts, places, etc…';
  message: string = '';
  @Input() destinationId : number | undefined;
  @Input() pageNumber : number| undefined;
  @Output() searchValue = new EventEmitter<any>();
  @Output() showPage = new EventEmitter<any>();
  @Output() pageIsVisible = new EventEmitter<any>();
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
    if(this.inputRef.nativeElement.value === ''){
      this.message = 'Type something please!';
      return
    }
    this.pageIsVisible.emit(false);
    let params = `query=${query}`
    this.dataService.searchData(params).subscribe((hotelSearch : any)  => {
        this.searchResult = hotelSearch?.suggestions[0]?.entities || null;
        if(this.searchResult.length === 0){
          this.searchResult = '';
          this.message = 'Sorry no matches found!';
        } else {
          this.message = '';
          this.searchValue.emit(this.searchResult);
        }
      },
      (err : any) => console.error(err),
      () => this.pageIsVisible.emit(true));
  }

}
