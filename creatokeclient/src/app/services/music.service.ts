import {ErrorHandler, Injectable} from '@angular/core';
import axios from "axios";

export interface ErrorResponse {
  id: string;
  code: string;
  message: string;
}
@Injectable({
  providedIn: 'root'
})

export class MusicService {

  // @ts-ignore
  private errorHandler: ErrorHandler;

  constructor() { }

  async getAllMusics(): Promise<any> {
    try{
      await axios({
        method: 'get',
        url: 'http://localhost:3000/admin/list-music',
        responseType: 'json'
      }).then(function (response) {
        return (response.data);
      });
    }catch (e) {
      return( Promise.reject(this.normalizeError(e)));
    }
  }

  private normalizeError( error: any ) : ErrorResponse {

    this.errorHandler.handleError( error );
    return({
      id: "-1",
      code: "UnknownError",
      message: "An unexpected error occurred."
    });

  }
}
