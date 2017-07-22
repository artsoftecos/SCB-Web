import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoUploadFilesComponent } from './demo-upload-files.component';

describe('DemoUploadFilesComponent', () => {
  let component: DemoUploadFilesComponent;
  let fixture: ComponentFixture<DemoUploadFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoUploadFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoUploadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
