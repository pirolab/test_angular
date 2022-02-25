import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DataService} from "./body.service";
import{ Constants } from '../../config/constants';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bodyComponent',
  templateUrl:'./body.component.html',
  styleUrls : ['./body.component.scss'],

})
export class BodyComponent  implements OnInit {
  searchResults: any;
  apiBody: any;
  searchValue : any;

  isVisible: boolean = true;

  pageTitle: string = '';
  pageNumber : number = 1;
  destinationId : number = 10233105;
  pageSize : number =  12;
  defaultDestId : number = Constants.API_DEST_ID;
  faLocationArrow = faLocationArrow;

  @ViewChild('inputRef')inputRef!: ElementRef;

  constructor(private _http: HttpClient, private dataService : DataService){}

  ngOnInit() {
    this.showPage(1 , this.destinationId);
  }

  resetSearch(){
    this.showPage(this.pageNumber = 1 , this.defaultDestId);
    this.inputRef.nativeElement.value = '';
    this.searchValue =''
  }

  searchHotel ( query : string){
    this.isVisible = false;
    let params = `query=${query}`
    this.dataService.searchData(params).subscribe((hotelSearch : any)  => {
        this.searchValue = hotelSearch?.suggestions[0].entities || null;
      },
      (err : any) => console.error(err),
      () => this.isVisible = true);
  }

  showPage ( pageNumber : number , destinationId : number ){
    this.isVisible = false;
    let destId = destinationId ? destinationId : this.destinationId;
    let params = `destinationId=${destId}&pageNumber=${pageNumber}&pageSize=${this.pageSize}`
    this.dataService.getData(params).subscribe((hotelData : any)  => {
        this.searchResults = hotelData.data.body.searchResults.results;
        this.apiBody = hotelData.data.body;
        this.pageTitle = this.apiBody.header;
        this.destinationId = destinationId ? destinationId : this.destinationId;
      },
      (err : any) => console.error(err),
      () => this.isVisible = true);
  }
}
