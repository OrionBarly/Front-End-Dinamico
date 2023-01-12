import { Component, OnInit } from '@angular/core';

import { PorfolioService } from './servicios/porfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Front-End';

  constructor(private _Porfolio: PorfolioService) {
    _Porfolio.Carga(['script']);
  }
}
