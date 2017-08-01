import { Component, Input, OnInit  } from '@angular/core';
import { FileUploader, FileLikeObject, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  moduleId: module.id,
  selector: 'app-upload-multiple-file',
  templateUrl: './upload-multiple-file.component.html',
  styleUrls: ['./upload-multiple-file.component.css']
})
export class UploadMultipleFileComponent implements OnInit {
public uploader:FileUploader;
  public hasBaseDropZoneOver:boolean = false;
  public errorMessage : string;
  
  @Input()  
  allowedMimeType: string[];
  @Input()
  maxFileSize: number;
  @Input()
  documento: number;
  @Input()
  service: string;

   toastOptions:ToastOptions = {
            title: "",
            msg: "",
            showClose: true,
            timeout: 5000,
            theme: 'material',         
            onAdd: (toast:ToastData) => {
                //console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                //console.log('Toast ' + toast.id + ' has been removed!');
            }
        };

  ngOnInit() {
    this.initUpload();
  }
  constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig) { 
        // Assign the selected theme name to the `theme` property of the instance of ToastyConfig. 
        // Possible values: default, bootstrap, material
        this.toastyConfig.theme = 'bootstrap';
        this.toastyConfig.position = 'bottom-right';
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
      this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
      this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
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

    onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
      console.log("Exitoso envio del archivo");
      console.log(response);
      if (response !== undefined && response != '') {
        this.addSuccessToast(response);
        /*let data = JSON.parse(response); //success server response
        */
      }
    }

    onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
      console.log("Error enviando el archivo");
      console.log(response);
      if (response !== undefined && response != '') {
        this.addErrorToast(response);
        /*let error = JSON.parse(response); //error server response
        */
      }
    }
   
  addSuccessToast(message: string) {
      this.toastOptions.msg = message;
        this.toastyService.success(this.toastOptions);
    }

    addErrorToast(message: string) {
        //this.toastyService.info(toastOptions);
        this.toastOptions.msg = message;
        this.toastyService.error(this.toastOptions);
        /*this.toastyService.wait(toastOptions);
        this.toastyService.error(toastOptions);
        this.toastyService.warning(toastOptions);*/
    }
}