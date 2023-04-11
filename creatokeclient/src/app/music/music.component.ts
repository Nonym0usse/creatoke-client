import {Component, OnInit} from '@angular/core';
import {MusicService} from "../services/music.service";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit{

  musics = [];
  constructor(private MusicService: MusicService) {
  }
   ngOnInit() {
    this.test().then(r => console.log('ok'));
  }

  async test(){
   const test = await this.MusicService.getAllMusics().then(e => console.log(e));
    console.log(test)
  }

}
