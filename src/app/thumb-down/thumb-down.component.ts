import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumb-down',
  templateUrl: './thumb-down.component.html',
  styleUrls: ['./thumb-down.component.css']
})
export class ThumbDownComponent implements OnInit {

  numberoflikes : number=0
  thumbdownbuttonclick(){
  this.numberoflikes++;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
