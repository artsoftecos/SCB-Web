import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = 'http://localhost:8080/api'

@Component({
  moduleId: module.id,
  selector: 'app-single-upload-file',
  templateUrl: './upload-single-file.component.html',
  styleUrls: ['./upload-single-file.component.css']
})
export class UploadSingleFileComponent {
  public uploader:FileUploader;
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

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

  public fileOverBase(e:any):void {
    console.log('fileOverBase');
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    console.log('fileOverAnother');
    this.hasAnotherDropZoneOver = e;
  }

}
