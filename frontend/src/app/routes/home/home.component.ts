import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myform: FormGroup;
  firstName: FormControl;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    event.preventDefault();
    this.router.navigateByUrl('/food');
  }

}
