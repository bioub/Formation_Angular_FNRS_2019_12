import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  user = {
    email: '',
    password: '',
    rememberMe: false,
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO Send user to back-end
  }
}
