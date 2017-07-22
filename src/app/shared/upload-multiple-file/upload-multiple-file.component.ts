import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:8080/selectionMultiple'

@Component({
  moduleId: module.id,
  selector: 'app-upload-multiple-file',
  templateUrl: './upload-multiple-file.component.html',
  styleUrls: ['./upload-multiple-file.component.css']
})
export class UploadMultipleFileComponent {

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