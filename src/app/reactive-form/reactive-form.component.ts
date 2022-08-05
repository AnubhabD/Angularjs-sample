import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { formInput } from '../interfaces/reactive-form.interface';

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
    email: string| null;
    phoneNumber: string | null;
  }>;

  constructor(private formBuilder: FormBuilder) {}

  userForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required])],
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
    ],
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
    if (this.userForm.valid) {
      this.sendDataToChild = this.userForm.value;

      localStorage.setItem('datas', JSON.stringify(this.sendDataToChild));
    }
    this.submitted = true;
  }

  onLogoutForm() {
    // this.sendDataToChild = null;
    localStorage.clear();
    alert('You have succesfully logged out');
  }
}