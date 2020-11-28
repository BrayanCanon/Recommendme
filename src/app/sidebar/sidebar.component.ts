import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ModeloGeneral } from '../escoger-favoritos/models/modeloGeneral.module';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  listaResultado: ModeloGeneral[] = []
  generarResultado: boolean = false;

  fillerNav = ["Peliculas", "Canciones", "Libros"]
  opcionSeleccionada: string = "";

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  cambiarOpcionRecomendados(eleccion:any)
  {
    this.opcionSeleccionada=eleccion;
  }
  
  getListaResultado(listaResultado:any)
  {
    this.listaResultado = listaResultado
  }
  
  darRespuesta(event:any)
  {
    this.generarResultado = event;
  }
}