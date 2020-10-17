import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDTO } from './registerDTO.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerDTO : RegisterDTO=new RegisterDTO();
  constructor(private httpClient : HttpClient) { 

  }

  ngOnInit(): void {
  }
  register(){
    alert('register method called'+this.registerDTO.userfullname);
  }

}
