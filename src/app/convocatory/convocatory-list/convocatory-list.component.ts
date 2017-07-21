import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//models
import { Convocatory } from '../../models/Convocatory';

//Services
import { ConvocatoryService } from '../../services/convocatory.service'

@Component({
  selector: 'app-convocatory-list',
  templateUrl: './convocatory-list.component.html',
  styleUrls: ['./convocatory-list.component.css']
})
export class ConvocatoryListComponent implements OnInit {

  constructor(private convocatoryService: ConvocatoryService, private router: Router) {}

  convocatories: Convocatory[];
  errorMessage: String;

  ngOnInit() {
    this.getAllConvocatories();
  }

  getAllConvocatories() {
    this.convocatoryService.get().then(convocatories => this.convocatories = convocatories);
  }

  goToDetail(convocatory: Convocatory) {
    this.errorMessage="Not implemented Go to detail";
  }
  
  apply(convocatory: Convocatory) {
    this.errorMessage="Not implemented apply";
  }

}
