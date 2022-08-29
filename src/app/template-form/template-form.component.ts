import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  Title = 'Template Driven Form';

  model: any = {};

  constructor(private location: Location) { }

  onSubmitForm() {
    console.log(this.model);
  }

  onClick() {
    this.location.back();
  }

  ngOnInit(): void {}
}