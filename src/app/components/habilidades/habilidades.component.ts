import { Component } from '@angular/core';

import { PorfolioService } from './../../servicios/porfolio.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent {
  constructor(private _Cargas: PorfolioService) {
    _Cargas.Carga(['circulos']);
  }
}
