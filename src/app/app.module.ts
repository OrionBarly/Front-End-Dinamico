import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PorfolioService } from './../app/servicios/porfolio.service';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { RedesComponent } from './components/redes/redes.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { FotoComponent } from './components/foto/foto.component';
import { BarrasComponent } from './components/barras/barras.component';
import { BackgroundComponent } from './components/background/background.component';
import { FooterComponent } from './components/footer/footer.component';
import { MusicComponent } from './components/music/music.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedesComponent,
    SeccionesComponent,
    FotoComponent,
    BarrasComponent,
    BackgroundComponent,
    FooterComponent,
    MusicComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ExperienciaComponent,
    DescripcionComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule],
  providers: [PorfolioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
