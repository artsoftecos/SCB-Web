import { Component } from '@angular/core';
import { Convocatoria } from './convocatoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  convocatorias = [];
  convocatoriaSeleccionada: Convocatoria;

  onSelect(convocatoria: Convocatoria): void {
    this.convocatoriaSeleccionada = convocatoria;
  }
}
