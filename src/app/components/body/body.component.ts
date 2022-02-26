import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DataService} from "./body.service";
import{ Constants } from '../../config/constants';
import {faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bodyComponent',
  templateUrl:'./body.component.html',
  styleUrls : ['./body.component.scss'],

})
export class BodyComponent  implements OnInit {
  searchResults: any;
  getDetail : any;
  hotelId: any;
  apiBody: any;
  isVisible: boolean = true;
  searchVal: any;
  pageTitle: string = '';
  pageNumber : number = 1;
  destinationId : number = 10233105;
  pageSize : number =  12;
  defaultDestId : number = Constants.API_DEST_ID;
  faLocationArrow = faLocationArrow;
  @ViewChild('inputRef')inputRef!: ElementRef;

  constructor(private _http: HttpClient, private dataService : DataService){}

  ngOnInit() {
    this.showPage({ pageNumber:1, destinationId: this.destinationId });
  }

  getSearchVal($event : any) {this.searchVal = $event;}

  getVisible($event : any) {this.isVisible = $event;}

  showDetail($event : any){
    this.isVisible = false;
    let params = `id=${$event.hotelId}`;
    this.dataService.getDetails(params).subscribe((hotelDetail : any)  => {
        this.getDetail = hotelDetail.data.body.propertyDescription;
        console.log(this.getDetail)
      },
      (err : any) => console.error(err),
      () => this.isVisible = true);
  }

  showPage ( $event : any){
    this.isVisible = false;
    let destId = $event.destinationId ? $event.destinationId : this.destinationId;
    let params = `destinationId=${destId}&pageNumber=${$event.pageNumber}&pageSize=${this.pageSize}`
    this.dataService.getData(params).subscribe((hotelData : any)  => {
        this.searchResults = hotelData.data.body.searchResults.results;
        this.apiBody = hotelData.data.body;
        this.pageTitle = this.apiBody.header;
        this.destinationId = $event.destinationId ? $event.destinationId : this.destinationId;
        this.pageNumber = $event.pageNumber;
      },
      (err : any) => console.error(err),
      () => this.isVisible = true);
  }
}
