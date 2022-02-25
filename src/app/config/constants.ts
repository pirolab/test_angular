import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
  public static API_ENDPOINT_LIST: string = 'https://hotels4.p.rapidapi.com/properties/list';
  public static API_ENDPOINT_SEARCH: string = 'https://hotels4.p.rapidapi.com/locations/v2/search';
  public static API_BASE_URL: string = 'hotels4.p.rapidapi.com';
  public static API_AUTH_KEY: string = 'ed6eb9714fmsh7913b01aca50d57p1f6500jsnba08cc38d340';
  public static API_DEST_ID: number = 10233105;
}
