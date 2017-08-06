import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OferentCreateComponent } from './oferent-create.component';

describe('OferentCreateComponent', () => {
  let component: OferentCreateComponent;
  let fixture: ComponentFixture<OferentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OferentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OferentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
