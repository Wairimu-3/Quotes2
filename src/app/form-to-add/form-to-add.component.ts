import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-form-to-add',
  templateUrl: './form-to-add.component.html',
  styleUrls: ['./form-to-add.component.css']
})
export class FormToAddComponent implements OnInit {

  newQuote = new Quotes(0,'','','','',new Date(),);
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
