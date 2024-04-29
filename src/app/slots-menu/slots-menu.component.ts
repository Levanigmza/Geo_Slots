import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slots-menu',
  templateUrl: './slots-menu.component.html',
  styleUrls: ['./slots-menu.component.css']
})
export class SlotsMenuComponent {
  constructor(private router: Router) {}


  PlaySlot() {
    this.router.navigate(['/geo-team']);
  }
}
