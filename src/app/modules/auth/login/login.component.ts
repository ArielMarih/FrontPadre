import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public form : FormGroup;
  public submitted = false;
  constructor(private _fb: FormBuilder){
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  validateForm(){
    if(this.form.valid){
      console.log('valido')
      this.submitted = false;
    } else {
      this.submitted = true;
    }
  }
}
