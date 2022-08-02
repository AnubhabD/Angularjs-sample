import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormOutputsComponent } from './reactive-form-outputs.component';

describe('ReactiveFormOutputsComponent', () => {
  let component: ReactiveFormOutputsComponent;
  let fixture: ComponentFixture<ReactiveFormOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormOutputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
