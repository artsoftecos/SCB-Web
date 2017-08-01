import { Component, OnInit } from '@angular/core';
import { MdSelectModule } from '@angular/material';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  	myState = 'AZ';
  	states = [{code: 'AL', name: 'Alabama'}];
  	
  	constructor() { 
	
		// console.log("ENTRA")
		// $('select').material_select();
		// $('#elemId').width();
	}

	ngOnInit() {
	}
}
