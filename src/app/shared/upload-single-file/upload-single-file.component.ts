import { Component, Input, OnInit  } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';

@Component({
  moduleId: module.id,
  selector: 'app-single-upload-file',
  templateUrl: './upload-single-file.component.html',
  styleUrls: ['./upload-single-file.component.css']
})
export class UploadSingleFileComponent implements OnInit {
  public uploader:FileUploader;

  private errorMessage : string;
  
  @Input()  
  allowedMimeType: string[];
  @Input()
  maxFileSize: number;
  @Input()
  documento: number;
  @Input()
  service: string;

  ngOnInit() {
    this.initUpload();
  }
  constructor() {  
  }

 initUpload() {
   var apiUrl = environment.apiUrl;   
   var url = apiUrl + "/" + this.service;

    this.uploader = new FileUploader({
      url: url,
      method: 'POST',
      headers: [
        {name: 'Access-Control-Allow-Credentials', value: 'false'},
        {name:'Access-Control-Allow-Origin', value: '*'}
      ],
      allowedMimeType: this.allowedMimeType,
      maxFileSize: this.maxFileSize
    });
     this.uploader.onWhenAddingFileFailed = (item, filter, options) => this.onWhenAddingFileFailed(item, filter, options);     
     this.uploader.onBuildItemForm = (item, form) => {
        form.append('documento', this.documento);
      };
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
