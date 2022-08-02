import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  Title = 'Reactive Form';
  submitted: boolean = false;

  sendDataToChild!: Partial<{
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
  }>;

  constructor(private formBuilder: FormBuilder) {}

  userForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    phoneNumber: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{1}[0-9]{9}'),
      ]),
    ],
  });
  ngOnInit(): void {}

  onSubmitForm() {
    this.sendDataToChild = this.userForm.value;
    this.submitted = true;
  }
}