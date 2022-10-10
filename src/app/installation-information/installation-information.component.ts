import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleNameService } from '../services/module-name.service';

@Component({
  selector: 'app-installation-information',
  templateUrl: './installation-information.component.html',
  styleUrls: ['./installation-information.component.scss'],
})
export class InstallationInformationComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  moduleName: string;

  public piecesInfo: { name: string; convencion: string; title: string; img: string; concept:string; feature:string }[] = [];

  rutas = {
    "Hidraulica": [
      {
        name:'Convención',
        title: 'Adaptador Hembra',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/adaptadorHembra.png',
        concept: 'Este accesorio permite la instalacion a un accesorio macho roscado, cuenta con una rosca npt y en su otro extremo se hace la union por medio de acondicionador y    soldadura celta para P.V.C',
        feature:
          'Fabricados de PVC (Policloruro de vinilo), resistentes a la corrosión, oxidación e incrustaciones y a fracturas por impacto No contaminan los fluidos que transportan y no generan par galvánico Para conducción de agua fría a alta presión, instalaciones residenciales, hoteleras, comerciales y de servicios Fácil y rápida instalación Serie inglesa (SI)',
      },
      {
        name:'Convención',
        title: 'Adaptador Macho',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorMacho.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/adaptadorMacho.png',
        concept: 'Este accesorio permite la instalacion a un accesorio hembra roscado, cuenta con una rosca npt y en su otro extremo se hace la union por medio de acondicionador y soldadura celta para P.V.C',
        feature:
          'Fabricados de PVC (Policloruro de vinilo), resistentes a la corrosión, oxidación e incrustaciones y a fracturas por impacto, además no contaminan los fluidos que transportan y no generan par galvánico'
      },
      {
        name:'Convención',
        title: 'Medidor De Agua',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/medidorDeAgua.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/medidorDeAgua.png',
        concept: 'Un medidor de agua, contador de agua o hidrómetro,​ es un aparato que permite contabilizar el volumen de agua que pasa a través de él. Suele ser utilizado en las conducciones de abastecimiento de agua de instalaciones residenciales e industriales para realizar los cobros pertinentes a los usuarios.',
        feature:
          'Medidor de agua de 1/2" Clase B / R80 para agua fría, únicamente para uso interno o veredal. Trasmisión magnética, totalizador seco, orientable 360°.',
      },
      {
        name:'Convención',
        title: 'Buje Roscado',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/bujeRoscado.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/bujeRoscado.png',
        concept: 'Accesorio para tuberia presion, llamado tambien  reduccion con rosca.',
        feature:
          'Sus propiedades permiten soportar altas presiones de trabajo y ser resistente a la corrosion.',
      },
      {
        name:'Convención',
        title: 'Buje Soldado',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/bujeSoldado.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/bujeSoldado.png',
        concept: 'Accesorio complementario que permite unir tuberias PVC, de  Diametros diferentes, el sistema presion Lisa Tubosa esta diseñado para transportar agua potable de manera rapida y segura.',
        feature:
          'Sus propiedades permiten soportar altas presiones de trabajo y ser resistente a la corrosion.',
      },
      {
        name:'Convención',
        title: 'Codo 45',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/codo45.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/codo45.png',
        concept: 'Son accesorios de forma curva que se utilizan para cambiar la dirección del flujo de las líneas tantos grados como lo especifiquen los planos o dibujos de tuberías. Y su finalidad es transportar agua potable.',
        feature:
          'Gran resistencia a las fracturas por impacto, resistente a la corrosión, oxidación e incrustaciones y a la intemperie, no contamina los fluidos que transporta y no genera par galvánico.',
      },
      {
        name:'Convención',
        title: 'codo 90',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/codo90.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/codo90.png',
        concept: 'Son accesorios de forma curva que se utilizan para cambiar la dirección del flujo de las líneas tantos grados como lo especifiquen los planos o dibujos de tuberías. Y su finalidad es transportar agua potable.',
        feature:
          'Gran resistencia a las fracturas por impacto, resistente a la corrosión, oxidación e incrustaciones y a la intemperie, no contamina los fluidos que transporta y no genera par galvánico.',
      },
      {
        name:'Convención',
        title: 'Cruz Roscada',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/cruzRoscada.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/cruzRoscada.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tapones',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/tapones.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tapones.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Salida Agua Caliente',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/salidaAguaCaliente.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/salidaAguaCaliente.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Niple Roscado',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/nipleRoscado.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/nipleRoscado.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Salida Agua Fria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/salidaAguaFria.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/salidaAguaFria.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tee',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/tee.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tee.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Unión',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/union.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/union.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tee Hembra',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/teeReduccionHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/teeReduccionHembra.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tuerca Universal',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/tuercaUniversal.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tuercaUniversal.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Unión Deslizante',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/unionReparacionDeslizante.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/unionReparacionDeslizante.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Bola',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeBola.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeBola.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Compuerta',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeCompuerta.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeCompuerta.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Globo',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeGlobo.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeGlobo.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Pie',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDePie.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDePie.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Retención',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeRetencion.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeRetencion.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
    ],
    "Sanitaria": [
      {
        name:'Convención',
        title: 'Adaptador De Limpieza',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorDeLimpieza.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/adaptadorDeLimpieza.png',
        concept: 'lorem  de presión',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Bajante Agua Lluvia',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/bajanteAguaLluvia.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/bajanteAguaLluvia.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Bajante Agua Residual',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/bajanteAguaResidual.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/bajanteAguaResidual.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Buje',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/buje.png',
        concept: 'Son uniones hermeticas.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Caja De Inspeccion',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/cajaDeInspeccion.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Codo 45',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/codo45.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'codo 90',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/codo90.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Cruz Roscada',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/cruzRoscada.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tapones',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/tapones.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Salida Agua Caliente',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/salidaAguaCaliente.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Niple Roscado',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/nipleRoscado.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Salida Agua Fria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/salidaAguaFria.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tee',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/tee.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Unión',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/union.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tee Hembra',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/teeReduccionHembra.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tuerca Universal',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/tuercaUniversal.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Unión Deslizante',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/unionReparacionDeslizante.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Bola',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDeBola.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Compuerta',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDeCompuerta.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Globo',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDeGlobo.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Pie',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDePie.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula De Retención',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezasSanitarias/pieza/valvulaDeRetencion.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
    ],
    "Gas": [
      {
        name:'Convención',
        title: 'codo 90',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/codo90.png',
        concept: 'lorem  de presión',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Semicodo',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/semicodo.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tee',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/tee.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Conector De Manguera',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/conectorDeManguera.png',
        concept: 'Son uniones hermeticas.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tuberia De Temple Flexible',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/tuberiaDeTempleFlexible.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Valvula Decorativa PE AL PE',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/valvulaDecorativa.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tapon Copa',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/taponCopa.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Universal EPC',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/universalEPC.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tuberia Multicapa',
        convencion:
          '../../assets/svg/sourceInstallation/piezasHidraulicas/convencion/adaptadorHembra.png',
        img: '../../assets/svg/sourceInstallation/piezasGases/pieza/tuberiaMulticapa.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
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
      this.piecesInfo = this.rutas[moduleId]
    })
  }

  ngOnInit() {}

}
