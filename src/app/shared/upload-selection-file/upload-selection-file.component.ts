import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:8080/selectionSingleMultiple'

@Component({
  moduleId: module.id,
  selector: 'app-upload-selection-file',
  templateUrl: './upload-selection-file.component.html',
  styleUrls: ['./upload-selection-file.component.css']
})
export class UploadSelectionFileComponent {

  public uploader:FileUploader;

  constructor() {
    this.initUpload();
  }

 initUpload() {
    this.uploader = new FileUploader({
      url: URL,
      method: 'POST',
      headers: [
        {name: 'Access-Control-Allow-Credentials', value: 'false'},
        {name:'Access-Control-Allow-Origin', value: '*'}
      ],
     // allowedMimeType: ['image/png'],
      maxFileSize: 1024*1024
    });
  }
}