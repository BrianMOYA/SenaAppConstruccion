import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleNameService } from '../services/module-name.service';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss'],
})
export class InstallationComponent implements OnInit {
  moduleName: string;

  public moduleGames: { title: string; img: string; route: string }[] = [];

  rutas = {
    "Hidraulica": [
      {
        title: 'Adaptador Hembra',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/adaptadorHembra.png',
        concept: 'lorem  de presión',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Adaptador Macho',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/adaptadorMacho.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Medidor De Agua',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/medidorDeAgua.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Buje Roscado',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/bujeRoscado.png',
        concept: 'Son uniones hermeticas.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Buje Soldado',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/bujeSoldado.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Codo 45',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/codo45.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'codo 90',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/codo90.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Cruz Roscada',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/cruzRoscada.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tapones',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/tapones.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Salida Agua Caliente',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/salidaAguaCaliente.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Niple Roscado',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/nipleRoscado.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Salida Agua Fria',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/salidaAguaFria.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tee',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/tee.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Unión',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/union.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tee Hembra',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/teeReduccionHembra.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tuerca Universal',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/tuercaUniversal.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Unión Deslizante',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/unionReparacionDeslizante.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Bola',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/valvulaDeBola.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Compuerta',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/valvulaDeCompuerta.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Globo',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/valvulaDeGlobo.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Pie',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/valvulaDePie.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Retención',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasHidraulicas/pieza/valvulaDeRetencion.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
    ],
    "Sanitaria": [
      {
        title: 'Adaptador De Limpieza',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/adaptadorDeLimpieza.png',
        concept: 'lorem  de presión',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Bajante Agua Lluvia',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/bajanteAguaLluvia.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Bajante Agua Residual',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/bajanteAguaResidual.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Buje',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/buje.png',
        concept: 'Son uniones hermeticas.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Caja De Inspeccion',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/cajaDeInspeccion.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Codo 45',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/codo45.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'codo 90',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/codo90.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Cruz Roscada',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/cruzRoscada.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tapones',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/tapones.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Salida Agua Caliente',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/salidaAguaCaliente.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Niple Roscado',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/nipleRoscado.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Salida Agua Fria',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/salidaAguaFria.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tee',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/tee.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Unión',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/union.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tee Hembra',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/teeReduccionHembra.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tuerca Universal',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/tuercaUniversal.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Unión Deslizante',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/unionReparacionDeslizante.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Bola',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDeBola.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Compuerta',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDeCompuerta.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Globo',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDeGlobo.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Pie',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDePie.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula De Retención',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDeRetencion.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
    ],
    "Gas": [
      {
        title: 'codo 90',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/codo90.png',
        concept: 'lorem  de presión',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Semicodo',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/semicodo.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tee',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/tee.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Conector De Manguera',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/conectorDeManguera.png',
        concept: 'Son uniones hermeticas.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tuberia De Temple Flexible',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/tuberiaDeTempleFlexible.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula Decorativa PE AL PE',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/valvulaDecorativa.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tapon Copa',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/taponCopa.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Universal EPC',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/universalEPC.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Tuberia Multicapa',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/tuberiaMulticapa.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        title: 'Valvula PE AL PE',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/valvulaPE_AL_PE.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
    ],
  };

  constructor(
    private moduleNameService: ModuleNameService,
    private router: Router
  ) {
    this.moduleNameService.moduleNameSource.subscribe((moduleId) => {
      this.moduleGames = this.rutas[moduleId]
    })
  }

  ngOnInit() {}

  goTo() {
    this.router.navigateByUrl('installationInfo');
  }
}
