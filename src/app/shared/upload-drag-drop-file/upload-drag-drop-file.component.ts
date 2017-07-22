import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:8080/selectionDragDrop'

@Component({
  moduleId: module.id,
  selector: 'app-upload-drag-drop-file',
  templateUrl: './upload-drag-drop-file.component.html',
  styleUrls: ['./upload-drag-drop-file.component.css']
})
export class UploadDragDropFileComponent {
  public uploader:FileUploader;
  public hasBaseDropZoneOver:boolean = false;

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
}