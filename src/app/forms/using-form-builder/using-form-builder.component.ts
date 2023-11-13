import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-using-form-builder',
  templateUrl: './using-form-builder.component.html',
  styleUrls: ['./using-form-builder.component.css']
})
export class UsingFormBuilderComponent implements OnInit {


  userForms: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForms = this.formBuilder.group({
      id: new FormControl('0'),
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl('')
    })
  }

  ngOnInit(): void {

  }

}
