import {ErrorHandler, Injectable} from '@angular/core';
import {ErrorResponse} from "./music.service";
import {MusicModel} from "../music/music.model";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private errorHandler: ErrorHandler | any;

  constructor() { }

  async createMusic(music: MusicModel): Promise<any> {
    try{
      await axios({
        method: 'post',
        url: 'http://localhost:3000/admin/create-music',
        responseType: 'json',
        data: music
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
