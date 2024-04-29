import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Geo_Slots';
  User: string = '';
  Balance: number = 10000

  ShowSlotsmenu : boolean = true


  ngOnInit(): void {
     this.ShowSlotsmenu  = true
  }
  
  redirectToSlot() {
    this.ShowSlotsmenu = false;
  }
}