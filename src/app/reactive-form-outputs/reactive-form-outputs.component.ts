import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-outputs',
  templateUrl: './reactive-form-outputs.component.html',
  styleUrls: ['./reactive-form-outputs.component.scss'],
})
export class ReactiveFormOutputsComponent implements OnInit {

  @Input()
  data!: Partial<{
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
  }>;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    //console.log();
  }
}