import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../services/body.service";
import {Constants} from '../../config/constants';
import {Subscription, Observable, map, tap} from "rxjs"


@Component({
  selector: 'bodyComponent',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})

export class BodyComponent implements OnInit {
  searchResults: any;
  hotelId: any;
  apiBody: any;
  isVisible: boolean = true;
  searchVal: any;
  pageTitle: string = '';
  pageNumber: number = 1;
  destinationId: number = Constants.API_DEST_ID;
  pageSize: number = 12;
  defaultDestId: number = Constants.API_DEST_ID;
  setOverflow: boolean = false;
  @ViewChild('inputRef') inputRef!: ElementRef;
  hotelResponse$: Observable<any>;


  constructor(private _http: HttpClient, private dataService: DataService) {
  }

  ngOnInit() {
    this.showPage({pageNumber: 1, destinationId: this.destinationId});
  }

  getSearchVal($event: any) {
    this.searchVal = $event;
  }

  getVisible($event: any) {
    this.isVisible = $event;
  }


  showPage($event: any): any {
    this.isVisible = false;
    this.pageNumber = $event.pageNumber;
    this.destinationId = $event.destinationId ? $event.destinationId : this.destinationId;
    let params = `destinationId=${this.destinationId}&pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`;
    this.hotelResponse$ = this.dataService
      .getData(params)
      .pipe(
        map(hotelData =>
          hotelData.data.body
        ),
        tap({
          complete: () => this.isVisible = true
        }),
      )
  }

}
