import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  Title = 'Template Driven Form';

  model: any = {};

  constructor() { }

  onSubmitForm() {
    console.log(this.model);
  }

  ngOnInit(): void {}
}