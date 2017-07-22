import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSelectionFileComponent } from './upload-selection-file.component';

describe('UploadSelectionFileComponent', () => {
  let component: UploadSelectionFileComponent;
  let fixture: ComponentFixture<UploadSelectionFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSelectionFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSelectionFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
