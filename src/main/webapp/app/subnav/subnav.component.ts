import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sub-nav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss']
})
export class SubnavComponent implements OnInit {

  constructor() { }
  @Output() out = new EventEmitter();

  ngOnInit() {
  }

  sideNav(e) {

    this.out.emit(e);
  }
}
