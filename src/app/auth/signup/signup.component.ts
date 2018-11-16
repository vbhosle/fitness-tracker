import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private maxDob:Date;

  constructor() { }

  ngOnInit() {
    this.maxDob = new Date();
    this.maxDob.setFullYear(this.maxDob.getFullYear() - 18);
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

}
