import { DemoAddress, DemoModel } from '../../../store/models/common';
import { Component, Input, OnInit, OnChanges  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  @Input() hero : DemoModel;
  heroForm: FormGroup;
  constructor(private fb: FormBuilder) {
     }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    // debugger;
    // this.heroForm.reset({
    //   name: this.hero.name,
    //   address: this.hero.address || new DemoAddress()
    // });     
  }
  
  setForm(){
    this.heroForm.setValue({
      name:    this.hero.name,
      address: this.hero.address || new DemoAddress()
    });
  }

  createForm() {
    debugger;
    this.heroForm = this.fb.group({
        name: this.hero.name,
        address: this.fb.group(this.hero.address), 
        age: this.hero.age,
        sex: this.hero.sex
      });
  }
}
