import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoryDetailComponent } from './convocatory-detail.component';

describe('ConvocatoryDetailComponent', () => {
  let component: ConvocatoryDetailComponent;
  let fixture: ComponentFixture<ConvocatoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
