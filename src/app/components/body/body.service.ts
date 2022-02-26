import { Injectable } from '@angular/core';
import{ Constants } from '../../config/constants';
import { HttpClient  } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) {
  }

  searchData(params : string) : Observable<any>{
    return  this._http.get(`${Constants.API_ENDPOINT_SEARCH}/?${params}` , {
      "headers": {
        "x-rapidapi-host": Constants.API_BASE_URL,
        "x-rapidapi-key": Constants.API_AUTH_KEY
      }
    })
  }

  getData(params : string) : Observable<any>{
    return  this._http.get(`${Constants.API_ENDPOINT_LIST}/?${params}` , {
      "headers": {
        "x-rapidapi-host": Constants.API_BASE_URL,
        "x-rapidapi-key": Constants.API_AUTH_KEY
      }
    })
  }

  getDetails( params : string){
    return  this._http.get(`${Constants.API_ENDPOINT_DETAIL}/?${params}` , {
      "headers": {
        "x-rapidapi-host": Constants.API_BASE_URL,
        "x-rapidapi-key": Constants.API_AUTH_KEY
      }
    })
  }

  getDetailImages( params : string){
    return  this._http.get(`${Constants.API_ENDPOINT_DETAIL_IMAGES}/?${params}` , {
      "headers": {
        "x-rapidapi-host": Constants.API_BASE_URL,
        "x-rapidapi-key": Constants.API_AUTH_KEY
      }
    })
  }

}
