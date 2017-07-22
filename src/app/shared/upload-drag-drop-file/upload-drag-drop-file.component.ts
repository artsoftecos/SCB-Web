import { Component, Input, OnInit  } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

const URL = 'http://localhost:8080/selectionDragDrop'

@Component({
  moduleId: module.id,
  selector: 'app-upload-drag-drop-file',
  templateUrl: './upload-drag-drop-file.component.html',
  styleUrls: ['./upload-drag-drop-file.component.css']
})
export class UploadDragDropFileComponent implements OnInit{  
  public uploader:FileUploader;
  public hasBaseDropZoneOver:boolean = false;
  private errorMessage : string;
  
  @Input()  
  allowedMimeType: string[];
  @Input()
  maxFileSize: number;

  ngOnInit() {
    this.initUpload();
  }
  constructor() {  
  }

 initUpload() {
    this.uploader = new FileUploader({
      url: URL,
      method: 'POST',
      headers: [
        {name: 'Access-Control-Allow-Credentials', value: 'false'},
        {name:'Access-Control-Allow-Origin', value: '*'}
      ],
      allowedMimeType: this.allowedMimeType,
      maxFileSize: this.maxFileSize
    });
     this.uploader.onWhenAddingFileFailed = (item, filter, options) => this.onWhenAddingFileFailed(item, filter, options);     
  }

  public fileOverBase(e:any):void {
    console.log('fileOverBase');
    this.hasBaseDropZoneOver = e;
  }

   onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: any) {
     console.log('HAY ERROR');
        switch (filter.name) {
            case 'fileSize':
                this.errorMessage = `Maximum upload size exceeded (${item.size} of ${this.maxFileSize} allowed)`;
                break;
            case 'mimeType':
                const allowedTypes = this.allowedMimeType.join();
                this.errorMessage = `Type "${item.type} is not allowed. Allowed types: "${allowedTypes}"`;
                break;
            default:
                this.errorMessage = `Unknown error (filter is ${filter.name})`;
        }
    }
}