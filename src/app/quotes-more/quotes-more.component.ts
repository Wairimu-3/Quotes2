import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quotes-more',
  templateUrl: './quotes-more.component.html',
  styleUrls: ['./quotes-more.component.css']
})
export class QuotesMoreComponent implements OnInit {

  quotes: Quotes [] = [
    new Quotes(1,'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.','David Brinkley','Margaret Kimani','I never even thought of myself as deadpan until someone wrote an article about me about a year after I was doing comedy. There was a paper called the Boston Phoenix, and someone wrote a description of what I was doing and that is where I first saw deadpan.',new Date(2018, 13, 3)),
    new Quotes(2,'Those who dare to fail miserably can achieve greatly.',' John F. Kennedy','Margaret Kimani','The description of right lines and circles, upon which geometry is founded, belongs to mechanics. Geometry does not teach us to draw these lines, but requires them to be drawn',new Date(2017, 19, 1)),
    new Quotes(3,'It is hard to fail, but it is worse never to have tried to succeed.','Theodore Roosevelt','Margaret Kimani','I always thought that poetry is the verdict that others give to a certain kind of writing. So to call yourself a poet is a kind of dangerous description. It is for others; it for others to use.',new Date(2017, 29, 10)),
    ];
   
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.mediumDate = new Date(quote.mediumDate);
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  numberoflikes=0
  highestCounter=0;
  bestQuote:string;

  showMeMostLiked(){
    this.highestCounter=0;
    for(let i=0 ;i < this.quotes.length;i++){
      this.highestCounter = this.quotes[this.highestCounter].numberoflikes;
      if(this.quotes[i].highestCounter >this.quotes[i].numberoflikes){
        this.highestCounter=this.quotes[i].numberoflikes;  
      }
      return  this.bestQuote=this.quotes[i].author;
    }
  }
  

   deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete quote by ${this.quotes[index].author}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  completeGoal(isComplete, index){
    if(isComplete){
      // alert("You cannot delete a quote that you haven't posted")
      this.quotes.splice(index,1);
   }
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
