import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import {ToastyModule} from 'ng2-toasty';

//components
//se puede eliminar, si se quita el demo de arhivos
import { UploadSingleFileComponent } from './upload-single-file/upload-single-file.component';
import { UploadMultipleFileComponent } from './upload-multiple-file/upload-multiple-file.component';
import { UploadSelectionFileComponent } from './upload-selection-file/upload-selection-file.component';
import { UploadDragDropFileComponent } from './upload-drag-drop-file/upload-drag-drop-file.component';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    ToastyModule.forRoot()
  ],  
  declarations: [
    UploadSingleFileComponent,
    UploadMultipleFileComponent,
    UploadSelectionFileComponent,
    UploadDragDropFileComponent
  ],
  exports: [
    UploadSingleFileComponent, UploadMultipleFileComponent, 
    UploadSelectionFileComponent, UploadDragDropFileComponent
  ]
})
export class SharedModule { }
