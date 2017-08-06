import { Component, OnInit } from '@angular/core';
import {MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-oferent-create',
  templateUrl: './oferent-create.component.html',
  styleUrls: ['./oferent-create.component.css']
})
export class OferentCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   modalActions3 = new EventEmitter<string|MaterializeAction>();
  
  openModal3() {
    this.modalActions3.emit({action:"modal",params:['open']});
  }
  closeModal3() {
    this.modalActions3.emit({action:"modal",params:['close']});
  }

  registerOferent() {
    console.log('Registrar oferente');
  }

  registerSolicitant() {
    console.log('Registrar solicitante');
  }

}
