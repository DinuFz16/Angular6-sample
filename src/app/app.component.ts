import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular6-sample';

  mtd()
  {
    this.title='Thank you !'
  }

  action(str:any)
  {
    this.title=str;

    console.log(event)
  }

  public data:boolean = false;

  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];

            mtds()
            {
              this.months[3]="dinesh";
            }

            public records : any =[
              { name:'arun', class: 'I' },
              { name:'bala', class: 'II'},
              { name:'ravi', class: 'III'}
            ];

}
