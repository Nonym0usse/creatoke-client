import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {faPlayCircle, faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  faPlay = faPlayCircle;
  faBackward = faBackward;
  faForward = faForward;
}
