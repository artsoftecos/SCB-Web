import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = 'http://localhost:8080/selectionSingle'

@Component({
  moduleId: module.id,
  selector: 'app-single-upload-file',
  templateUrl: './upload-single-file.component.html',
  styleUrls: ['./upload-single-file.component.css']
})
export class UploadSingleFileComponent {
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
