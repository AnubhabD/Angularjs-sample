import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  Title = 'Form Validation';

  model: any = {};

  constructor() { }

  onSubmitForm(data: any) {
    // if(this.form.value){
    //   console.log(this.form.value);
    // }else{
    //   throw console.error("value is not provided");
    // }
    console.log(data);
  }

  ngOnInit(): void {
  }

}
