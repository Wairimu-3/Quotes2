export class Quotes {
    showDescription: boolean;
    public numberoflikes: number;
    public highestCounter: number;
  constructor( 
    public id: number,
    public quote: string, 
    public author: string, 
    public submitter: string, 
    public description: string,
    public mediumDate: Date,) 
    {
    this.showDescription = false;
    this.numberoflikes = 0;
    this.highestCounter = 0;
    }
}
