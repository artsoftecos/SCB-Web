import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoryApplyComponent } from './convocatory-apply.component';

describe('ConvocatoryApplyComponent', () => {
  let component: ConvocatoryApplyComponent;
  let fixture: ComponentFixture<ConvocatoryApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoryApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoryApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
