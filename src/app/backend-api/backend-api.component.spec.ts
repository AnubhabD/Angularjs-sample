import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendApiComponent } from './backend-api.component';

describe('BackendApiComponent', () => {
  let component: BackendApiComponent;
  let fixture: ComponentFixture<BackendApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
