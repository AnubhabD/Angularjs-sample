import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-reactive-form-outputs',
  templateUrl: './reactive-form-outputs.component.html',
  styleUrls: ['./reactive-form-outputs.component.scss'],
})
export class ReactiveFormOutputsComponent implements OnInit, OnChanges {
  @Input()
  data!: Partial<{
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
  }>;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      console.log(this.data);
    }
    console.log(changes);
  }
}