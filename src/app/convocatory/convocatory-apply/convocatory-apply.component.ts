import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-convocatory-apply',
  templateUrl: './convocatory-apply.component.html',
  styleUrls: ['./convocatory-apply.component.css']
})
export class ConvocatoryApplyComponent implements OnInit {

  @Input()
  document: String;

  constructor() { }

  ngOnInit() {    
  }


}
