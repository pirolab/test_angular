import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
  public static API_ENDPOINT_LIST: string = 'https://hotels4.p.rapidapi.com/properties/list';
  public static API_ENDPOINT_SEARCH: string = 'https://hotels4.p.rapidapi.com/locations/v2/search';
  public static API_ENDPOINT_DETAIL: string = 'https://hotels4.p.rapidapi.com/properties/get-details';
  public static API_ENDPOINT_DETAIL_IMAGES: string = 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos';
  public static API_BASE_URL: string = 'hotels4.p.rapidapi.com';
  public static API_AUTH_KEY: string = 'd789f1c06emsha9868d10ea7cd1bp1548bbjsna1681535534c';
  public static API_DEST_ID: number = 10233105;
}
