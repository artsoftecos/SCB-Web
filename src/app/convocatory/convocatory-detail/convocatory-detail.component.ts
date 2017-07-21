import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

//Services
import { ConvocatoryService } from '../../services/convocatory.service';

//models
import { Convocatory } from '../../models/convocatory';

@Component({
  selector: 'app-convocatory-detail',
  templateUrl: './convocatory-detail.component.html',
  styleUrls: ['./convocatory-detail.component.css']
})
export class ConvocatoryDetailComponent implements OnInit {

  convocatory: Convocatory;  

  constructor(
  private convocatoryService: ConvocatoryService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.convocatoryService.getConvocatory(+params.get('id'))) //El + es porque el recibe todo en string, con + lo pasa a numero
    .subscribe(convocatory => this.convocatory = convocatory);
  }

  goBack(): void {
    this.location.back();
  }
}
