import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDragDropFileComponent } from './upload-drag-drop-file.component';

describe('UploadDragDropFileComponent', () => {
  let component: UploadDragDropFileComponent;
  let fixture: ComponentFixture<UploadDragDropFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDragDropFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDragDropFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
