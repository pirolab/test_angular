import {Injectable} from '@angular/core';
import {Constants} from '../../config/constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headerDict = {
    "x-rapidapi-host": Constants.API_BASE_URL,
    "x-rapidapi-key": Constants.API_AUTH_KEY
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  }

  constructor(private _http: HttpClient) {
  }
  //http interceptor
  searchData(params: string): Observable<any> {
    return this._http.get(`${Constants.API_ENDPOINT_SEARCH}/?${params}`, this.requestOptions)
  }

  getData(params: string): Observable<any> {
    return this._http.get(`${Constants.API_ENDPOINT_LIST}/?${params}`, this.requestOptions)
  }

  getDetails(params: string) {
    return this._http.get(`${Constants.API_ENDPOINT_DETAIL}/?${params}`, this.requestOptions)
  }

  getDetailImages(params: string) {
    return this._http.get(`${Constants.API_ENDPOINT_DETAIL_IMAGES}/?${params}`, this.requestOptions)
  }

}
