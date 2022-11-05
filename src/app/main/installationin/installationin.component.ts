import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleNameService } from '../../services/module-name.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-installationin',
  templateUrl: './installationin.component.html',
  styleUrls: ['./installationin.component.scss'],
})
export class InstallationinComponent implements OnInit, OnDestroy {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  @ViewChild(IonSlides, { static:true}) slides: IonSlides;

  public piecesInfo: { imgSlider: string; name: string; convencion: string; title: string; img: string; concept:string; feature:string }[] = [];

  rutas = {
    "Hidraulica": [
      {
        name:'Convención',
        title: 'Tee',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/tee.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tee.png',
        concept: 'Te  (T):  Accesorio en  forma  de  T  que  permite  realizar  una  conexión  a  tres bandas.  También  llamada  racor  en  T.  Los  diámetros  de  las  distintas  salidas pueden ser del mismo tamaño o distinto, se unen con soldadura, apriete mecanico o adhesivo..',
        feature:
          'Las tees existen en diámetros desde 1/2 "" hasta 4 "" en el tipo Fabricación, su espesor depende del tubo o accesorio al cual va instalada y su dimensión es la medida del centro a cualquiera de las bocas de la te.'
      },
      {
        name:'Convención',
        title: 'Unión',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/union.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/union.png',
        concept: 'Son uniones hermeticas que permiten conectar o acoplar una linea de fluido hidraulico hacia otro componente hidraulico.',
        feature:
          'Menores pérdidas de presión y facilidad de instalación, además el sistema de unión de los Tubos PVC Presión, consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tee reducción',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/teeReduccionHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/teeReduccionHembra.png',
        concept: 'Son accesorios de forma cónica, fabricadas de diversos materiales,  Se utilizan para disminuir el volumen del fluido a través de las líneas de tuberías.',
        feature:
          'Cuenta con un diametro nominal mediante el cual se identifica desde 1/2" x 3/4"  diámetros, su espesor representa el grosor de las paredes de la reducción, esto va a depender de los tubos o accesorios al cual va a ser instalada, además existen desde el espesor estándar hasta el doble extrapesado; Es el tipo de instalación a través de juntas roscables, embutibles soldables y soldables a tope.',
      },
      {
        name:'Convención',
        title: 'Unión Universal',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/tuercaUniversal.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tuercaUniversal.png',
        concept: 'Las Tuercas o uniones Universales son unas conexiones que sirven para poder separar una línea de tubería, conexión o válvula,  sin necesidad de romperla',
        feature:
          'Funciona por medio de tres piezas (Dos terminales de tubo y una tuerca). Los tubos se ponen de manera fija en las terminales de la tuerca de unión (Stub End), y éstas a su vez se acoplan por medio de la tuerca giratoria. La unión universal se caracteriza por su de alta calidad, es resistente al uso con terminales macho y hembra, que enrosca de manera perfecta y segura, lo cual no permite la fuga de las sustancias.',
      },
      {
        name:'Convención',
        title: 'Codo 45°',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/codo45.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/codo45.png',
        concept: 'Son accesorios de forma curva que se utilizan para cambiar la dirección del flujo de las líneas tantos grados como lo especifiquen los planos o dibujos de tuberías. Y su finalidad es transportar agua potable.',
        feature:
          'Gran resistencia a las fracturas por impacto, resistente a la corrosión, oxidación e incrustaciones y a la intemperie, no contamina los fluidos que transporta y no genera par galvánico.',
      },
      {
        name:'Convención',
        title: 'Codo 90°',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/codo90.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/codo90.png',
        concept: 'Son accesorios de forma curva que se utilizan para cambiar la dirección del flujo de las líneas tantos grados como lo especifiquen los planos o dibujos de tuberías. Y su finalidad es transportar agua potable.',
        feature:
          'Gran resistencia a las fracturas por impacto, resistente a la corrosión, oxidación e incrustaciones y a la intemperie, no contamina los fluidos que transporta y no genera par galvánico.',
      },
      {
        name:'Convención',
        title: 'Tapones',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/tapones.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tapones.png',
        concept: 'Piezas terminales que cierran una tubería, puede ser un cierre estanco o con registro. Su objetivo es bloquear o impedir el paso o salida de fluidos en momentos determinados. Son utilizados en tuberías de menor diámetro y según su forma de instalación pueden ser soldados o roscados. se unen con soldadura, apriete mecánico o adhesivo.',
        feature:
          'Fabricados de PVC (Policloruro de vinilo), resistentes a la corrosión, oxidación e incrustaciones y a fracturas por impacto, no contaminan los fluidos que transportan y no generan par galvánico para conducción de agua fría a alta presión.',
      },
      {
        name:'Convención',
        title: 'Buje Soldado',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/bujeSoldado.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/bujeSoldado.png',
        concept: 'Accesorio complementario que permite unir tuberias PVC de  diametros diferentes, el sistema presion "Lisa Tubosa", esta diseñado para transportar agua potable de manera rapida y segura.',
        feature:
          'Sus propiedades permiten soportar altas presiones de trabajo y ser resistente a la corrosión.',
      },
      {
        name:'Convención',
        title: 'Buje Roscado',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/bujeRoscado.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/bujeRoscado.png',
        concept: 'Accesorio para tubería presión, llamado también  reducción con rosca.',
        feature:
          'Sus propiedades permiten soportar altas presiones de trabajo y ser resistente a la corrosión.',
      },
      {
        name:'Convención',
        title: 'Unión Deslizante',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/unionReparacionDeslizante.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/unionReparacionDeslizante.png',
        concept: 'Este accesorio permite el ensamblaje entre partes y la adaptación a cualquier Angulo y/o Dirección, además permite el cabeceo (movimiento vertical) de la embarcación, a la vez que mantiene un tubo ascendente en el fondo marino. Cuando la embarcación cabecea, la unión corrediza se pliega y se despliega en la misma medida, de manera que el tubo ascendente que se encuentra por debajo de ésta es relativamente poco afectado por el movimiento de la embarcación.',
        feature:
          'Cumple con la norma ASTM D 2466',
      },
      {
        name:'Convención',
        title: 'Adaptador Hembra',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/adaptadorHembra.png',
        concept: 'Este accesorio permite la instalación a un accesorio macho roscado, cuenta con una rosca npt y en su otro extremo se hace la unión por medio de acondicionador y soldadura celta para P.V.C',
        feature:
          'Fabricados de PVC (Policloruro de vinilo), resistentes a la corrosión, oxidación e incrustaciones y a fracturas por impacto No contaminan los fluidos que transportan y no generan par galvánico Para conducción de agua fría a alta presión, instalaciones residenciales, hoteleras, comerciales y de servicios Fácil y rápida instalación Serie inglesa (SI)',
      },
      {
        name:'Convención',
        title: 'Adaptador Macho',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorMacho.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/adaptadorMacho.png',
        concept: 'Este accesorio permite la instalación a un accesorio hembra roscado, cuenta con una rosca npt y en su otro extremo se hace la unión por medio de acondicionador y soldadura celta para P.V.C',
        feature:
          'No se corroe, resiste hasta 82°c, 150 psi, amigable con el medio ambiente, 100% reciclable, sismorresistente, larga vida útil. Seguro para transporte de agua caliente.'
      },
      {
        name:'Convención',
        title: 'Niple Roscado',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/nipleRoscado.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/nipleRoscado.png',
        concept: 'Accesorio utilizado para empalmar tuberías del mismo o diferentes diámetros',
        feature:
          'Niple de gran resistencia, alta calidad, con doble función gracias a las 2 roscas con las que cuenta en cada lado, liviano y fácil de instalar.',
      },
      {
        name:'Convención',
        title: 'Cruz Roscada',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/cruzRoscada.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/cruzRoscada.png',
        concept: 'La cruz PVC presión es un accesorio de PVC que tiene como función la unión con tubería de PVC para las diferentes derivaciones en un sistema de riego. Los accesorios PVC presión, como la cruz PVC, nos permiten adecuar las características de nuestra instalación mediante presión según nos sea necesario',
        feature:
          'No se corroe, resiste hasta 82°c, 150 psi, amigable con el medio ambiente, 100% reciclable, sismorresistente, larga vida útil. Seguro para transporte de agua caliente',
      },
      {
        name:'Convención',
        title: 'Válvula De Pie',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDePie.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDePie.png',
        concept: 'Las válvulas de pie son válvulas de retroceso. Protegen la tubería de la aspiración de partículas sólidas y evitan que se vacíe. Además sirven de ayuda de cebado.',
        feature:
          'A diferencia de otras válvulas, una válvula de pie se crea con un área de flujo mayor que el tamaño de la tubería para asegurarse que hay menos pérdida de carga. Las válvulas de pie son hechas de plástico PVC o de acero inoxidable, y son conocidas por mantener la presencia continua de succión dentro de la bomba',
      },
      {
        name:'Convención',
        title: 'Válvula De Compuerta',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeCompuerta.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeCompuerta.png',
        concept: 'Una válvula de compuerta es una herramienta cuya función es elevar o abrir una compuerta o cuchilla para permitir el paso de fluidos. Estas compuertas o cuchillas pueden ser redondas o rectangulares. Cuentan con un sello que se logra mediante la colocación de un disco en dos áreas distribuidas. Las caras de éste pueden ser paralelas o tener forma de cuña.',
        feature:
          'Son de accion manual. Posee vastago de elevacion,esto quiere decir que al ser accionadas, el vastago acciende o desciende en conjunto con el disco de cierre, según se quiera interrumpir o permitir el flujo de agua..',
      },
      {
        name:'Convención',
        title: 'Válvula De Retención',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeRetencion.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeRetencion.png',
        concept: 'Las válvulas de retención, conocidas también como válvulas unidireccionales, válvulas check o válvulas uniflujo, cierran completamente el paso de un fluido en circulación al mismo tiempo que permiten el fluido libre en el lado contrario. Su principal uso se da en tuberías que están unidas a sistemas de bombeo para impedir que la bomba trabaje en vacío',
        feature:
          'Una de las características de este tipo de válvulas es que están automatizadas y, por lo tanto, no necesitan de asistencia manual para su funcionamiento.',
      },
      {
        name:'Convención',
        title: 'Válvula De Bola',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeBola.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeBola.png',
        concept: 'Una válvula de bola o válvula de esfera, es un mecanismo de llave de paso que sirve para regular el flujo de un fluido canalizado y se caracteriza por que el mecanismo regulador situado en el interior tiene forma de esfera perforada.',
        feature:
          'Válvula de Bola con dos universales, PVC, rosca NPT, Cuerpo en PVC, Empaque de caucho en EPDM.',
      },
      {
        name:'Convención',
        title: 'Tubería Agua Caliente',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/salidaAguaCaliente.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/salidaAguaCaliente.png',
        concept: 'Son tubos fabricados y diseñados  para la conduccion de agua caliente  en edificaciones, cumplen con los requisitos establecidos en la NTC 1062.',
        feature:
          'Es mayor resistente a los agentes corrosivos presente en los suelos y productos transportados, entre los cuales se encuentran una gran variedad de ácidos y álcalis, además para el transporte de agua potable, este tipo de material no altera su calidad, ya que no aporta elementos que puedan ser tóxicos para el consumo humano.',
      },
      {
        name:'Convención',
        title: 'Tubería Agua Fría',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/salidaAguaFria.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/salidaAguaFria.png',
        concept: 'Son tubos fabricados y diseñados  para el consumo humano a presion. Y es fabricada para ser unida con cemento solvente. Los tubos vienen de extremo liso . El sistema de union es por medio de soldadura liquida, forma un conjunto homogeneo que desarrolla maxima resistencia en un minimo de tiempo.',
        feature:
          'Es mayor resistente a los agentes corrosivos presente en los suelos y productos transportados, entre los cuales se encuentran una gran variedad de ácidos y álcalis, además para el transporte de agua potable, este tipo de material no altera su calidad, ya que no aporta elementos que puedan ser tóxicos para el consumo humano.',
      },
      {
        name:'Convención',
        title: 'Válvula De Globo',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeGlobo.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeGlobo.png',
        concept: 'Las válvulas de globo son válvulas de movimiento lineal y están diseñadas básicamente para interrumpir e iniciar el flujo. El disco de una válvula de globo puede apartarse totalmente de la ruta del flujo o puede cerrar el flujo por completo. El principio fundamental del funcionamiento de las válvulas de globo es el movimiento perpendicular del disco en relación con el asiento',
        feature:
          '"Existen tres diseños básicos para el cuerpo de las válvulas de globo(Cuerpo en T, Cuerpo en Y y Cuerpo en ángulo),todos los diseños pueden aplicarse en soluciones con tapa atornillada o tapa de cierre a presión (Pressure Seal).',
      },
      {
        name:'Convención',
        title: 'Medidor De Agua',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/medidorDeAgua.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/medidorDeAgua.png',
        concept: 'Un medidor de agua, contador de agua o hidrómetro, es un aparato que permite contabilizar el volumen de agua que pasa a través de él. Suele ser utilizado en las conducciones de abastecimiento de agua de instalaciones residenciales e industriales para realizar los cobros pertinentes a los usuarios.',
        feature:
          'Medidor de agua de 1/2" Clase B / R80 para agua fría, únicamente para uso interno o veredal. Trasmisión magnética, totalizador seco, orientable 360°.',
      },
    ],
    "Sanitaria": [
      {
        name:'Convención',
        title: 'Adaptador De Limpieza',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorDeLimpieza.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/adaptadorDeLimpieza.png',
        concept: 'lorem  de presión',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Bajante Agua Lluvia',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/bajanteAguaLluvia.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/bajanteAguaLluvia.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Bajante Agua Residual',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/bajanteAguaResidual.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/bajanteAguaResidual.png',
        concept: 'Son uniones.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tuberia De Aguas Lluvias',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/tuberiaDeAguasLluvias.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Buje',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/buje.png',
        concept: 'Son uniones hermeticas.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Caja De Inspeccion',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/cajaDeInspeccion.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Codo 45',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/codo45.png',
        concept: 'Son uniones hermeticas',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'codo 90',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/codo90.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Codo Reventilado',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/codoSanitarioReventilado.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Sifon',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/sifon.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tapon De Prueba',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/taponDePrueba.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tee Sanitaria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/teeSanitaria.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tee Doble',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/teeSanitariaDoble.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tuberia Sanitaria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/tuberiaSanitaria.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tuberia Ventilacion',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/tuberiaVentilacion.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Union Sanitaria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/unionSanitaria.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Yee Sanitaria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/yeeSanitaria.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Yee Doble',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/yeeSanitariaDoble.png',
        concept: 'Son uniones hermeticas .',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Lavadero',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/lavadero.png',
        concept: 'Pila o recipiente grande que sirve para lavar la ropa.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Lavadora',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/lavadora.png',
        concept: 'Aparato electrodoméstico que sirve para lavar la ropa.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Lavamanos',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/lavamanos.png',
        concept: 'Se llama lavabo o lavamanos al recipiente en el que se vierte el agua para el aseo personal.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Lavaplatos',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/lavaplatos.png',
        concept: 'Recipiente que sirve para lavar platos, cubiertos y otros utensilios de cocina.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Orinal',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/orinal.png',
        concept: 'Un urinario o mingitorio es un objeto utilizado para orinar, generalmente ubicado en baños públicos masculinos.',
        feature:
          'Menores pérdidas de presión Facilidad de Instalación: El sistema de unión de los Tubos PVC Presión consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Sanitario',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/sanitario.png',
        concept: 'Aparato sanitario para evacuar los excrementos y la orina, provisto de un sifón que evita los malos olores.',
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
    private router: Router,
  ) {
    this.moduleNameService.moduleNameSource.subscribe((moduleId) => {
      this.piecesInfo = this.rutas[moduleId]
    })

  }

  ngOnDestroy(): void {
    console.log('HOLA');

  }


  ngOnInit() {
    this.slides.slideTo(0);
  }

}
