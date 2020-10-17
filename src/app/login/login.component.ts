import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  siteKey :string;
  
  constructor() { 
    this.siteKey='6LfaV9cZAAAAAJIG9sDfYJJG6ekIOA7reneUx5dF';
  }
  
  ngOnInit(): void {
  }

}
