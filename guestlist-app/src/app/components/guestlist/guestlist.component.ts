import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {
  guest: string = 'Guest Name';
  bride: boolean = false;
  groom: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
