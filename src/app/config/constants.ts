import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
  public static API_ENDPOINT_LIST: string = 'https://hotels4.p.rapidapi.com/properties/list';
  public static API_ENDPOINT_SEARCH: string = 'https://hotels4.p.rapidapi.com/locations/v2/search';
  public static API_ENDPOINT_DETAIL: string = 'https://hotels4.p.rapidapi.com/properties/get-details';
  public static API_ENDPOINT_DETAIL_IMAGES: string = 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos';
  public static API_BASE_URL: string = 'hotels4.p.rapidapi.com';
  public static API_AUTH_KEY: string = 'ddf5024cc5msh52c125592ea35d2p17f5b4jsn3891ac8fdc84';
  public static API_DEST_ID: number = 10233105;
}
