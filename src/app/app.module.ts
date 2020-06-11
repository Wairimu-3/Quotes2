import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesPipe } from './quotes.pipe';
import { ThumbDownComponent } from './thumb-down/thumb-down.component';
import { QuoteShowComponent } from './quote-show/quote-show.component';
import { ThumbUpComponent } from './thumb-up/thumb-up.component';
import { QuotesMoreComponent } from './quotes-more/quotes-more.component';
import { DetailsComponent } from './details/details.component';
import { FormToAddComponent } from './form-to-add/form-to-add.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { MostlikedDirective } from './mostliked.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesPipe,
    ThumbDownComponent,
    QuoteShowComponent,
    ThumbUpComponent,
    QuotesMoreComponent,
    DetailsComponent,
    FormToAddComponent,
    StrikethroughDirective,
    DateCountPipe,
    MostlikedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
