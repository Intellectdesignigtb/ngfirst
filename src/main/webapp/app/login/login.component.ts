import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cashCoreApp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginRedirect() {

    location.href = "/home";
  }
}
