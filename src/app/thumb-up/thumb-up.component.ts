import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumb-up',
  templateUrl: './thumb-up.component.html',
  styleUrls: ['./thumb-up.component.css']
})
export class ThumbUpComponent implements OnInit {

  numberoflikes : number=0
  thumbupbuttonclick(){
  this.numberoflikes++;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
