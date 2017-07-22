import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMultipleFileComponent } from './upload-multiple-file.component';

describe('UploadMultipleFileComponent', () => {
  let component: UploadMultipleFileComponent;
  let fixture: ComponentFixture<UploadMultipleFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMultipleFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMultipleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
