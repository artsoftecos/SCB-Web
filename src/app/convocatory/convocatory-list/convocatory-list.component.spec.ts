import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoryListComponent } from './convocatory-list.component';

describe('ConvocatoryListComponent', () => {
  let component: ConvocatoryListComponent;
  let fixture: ComponentFixture<ConvocatoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
