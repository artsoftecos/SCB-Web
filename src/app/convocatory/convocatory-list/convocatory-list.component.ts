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
    this.convocatoryService.get().subscribe(
       convocatories => this.convocatories = convocatories,
        err => { console.log(err)
      }
    );
  }

  goToDetail(convocatory: Convocatory) {
    this.router.navigate(['/convocatory', convocatory.id]);    
  }
  
  apply(convocatory: Convocatory) {
    this.errorMessage="Not implemented apply";
  }

}
