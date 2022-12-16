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
        title: 'Unión',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/union.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/union.png',
        concept: 'Son uniones herméticas que permiten conectar o acoplar una línea de fluido hidráulico hacia otro componente hidráulico.',
        feature:
          'Menores pérdidas de presión y facilidad de instalación, además el sistema de unión de los tubos PVC Presión, consiste en conexiones soldadas por medio de soldadura líquida, lo cual forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
      },
      {
        name:'Convención',
        title: 'Tee',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/tee.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tee.png',
        concept: 'Tee (T):  accesorio en  forma  de  T  que  permite  realizar  una  conexión  a  tres bandas.  También  llamada  racor  en  T.  Los  diámetros  de  las  distintas  salidas pueden ser del mismo tamaño o distinto, se unen con soldadura, apriete mecanico o adhesivo.',
        feature:
          'Las tees existen en diámetros desde 1/2 "" hasta 4 "" en el tipo fabricación, su espesor depende del tubo o accesorio al cual va instalada y su dimensión es la medida del centro a cualquiera de las bocas de la tee.'
      },
      {
        name:'Convención',
        title: 'Tee reducción',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/teeReduccionHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/teeReduccionHembra.png',
        concept: 'Son accesorios de forma cónica, fabricadas de diversos materiales,  Se utilizan para disminuir el volumen del fluido a través de las líneas de tuberías.',
        feature:
          'Cuenta con un diámetro nominal mediante el cual se identifica desde 1/2" x 3/4" diámetros, su espesor representa el grosor de las paredes de la reducción, esto va a depender de los tubos o accesorios al cual va a ser instalada, además existen desde el espesor estándar hasta el doble extrapesado; es el tipo de instalación a través de juntas roscables, embutibles soldables y soldables a tope',
      },
      {
        name:'Convención',
        title: 'Unión Universal',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/tuercaUniversal.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/tuercaUniversal.png',
        concept: 'Las tuercas o Uniones universales son unas conexiones que sirven para poder separar una línea de tubería, conexión o válvula, sin necesidad de romperla.',
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
        concept: 'Accesorio complementario que permite unir tuberías PVC de  diámetros diferentes, el sistema presión "Lisa Tubosa", está diseñado para transportar agua potable de manera rápida y segura.',
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
        concept: 'Este accesorio permite el ensamblaje entre partes y la adaptación a cualquier ángulo y/o dirección, además permite el cabeceo (movimiento vertical) de la embarcación, a la vez que mantiene un tubo ascendente en el fondo marino. Cuando la embarcación cabecea, la unión corrediza se pliega y se despliega en la misma medida, de manera que el tubo ascendente que se encuentra por debajo de ésta, es relativamente poco afectado por el movimiento de la embarcación.',
        feature:
          'Cumple con la norma ASTM D 2466',
      },
      {
        name:'Convención',
        title: 'Adaptador Hembra',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorHembra.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/adaptadorHembra.png',
        concept: 'Este accesorio permite la instalación a un accesorio macho roscado, cuenta con una rosca npt y en su otro extremo se hace la unión por medio de acondicionador y soldadura celta para P.V.C.',
        feature:
          'Fabricados de PVC (Policloruro de vinilo), resistentes a la corrosión, oxidación e incrustaciones y a fracturas por impacto no contaminan los fluidos que transportan y no generan par galvánico Para conducción de agua fría a alta presión, instalaciones residenciales, hoteleras, comerciales y de servicios fácil y rápida instalación Serie inglesa (SI).',
      },
      {
        name:'Convención',
        title: 'Adaptador Macho',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/adaptadorMacho.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/adaptadorMacho.png',
        concept: 'Este accesorio permite la instalación a un accesorio hembra roscado, cuenta con una rosca npt y en su otro extremo se hace la unión por medio de acondicionador y soldadura celta para P.V.C.',
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
        concept: 'La cruz PVC presión es un accesorio de PVC que tiene como función la unión con tubería de PVC para las diferentes derivaciones en un sistema de riego. Los accesorios PVC presión, como la cruz PVC, nos permiten adecuar las características de nuestra instalación mediante presión según nos sea necesario.',
        feature:
          'No se corroe, resiste hasta 82°c, 150 PSI, amigable con el medio ambiente, 100% reciclable, sismorresistente, larga vida útil. Seguro para transporte de agua caliente.',
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
          'Son de acción manual. Posee vástago de elevación. Esto quiere decir, que al ser accionadas, el vástago asciende o desciende en conjunto con el disco de cierre, según se quiera interrumpir o permitir el flujo de agua',
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
        concept: 'Son tubos fabricados y diseñados para el consumo humano a presión. Y es fabricada para ser unida con cemento solvente. Los tubos vienen de extremo liso. El sistema de unión es por medio de soldadura líquida, forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo.',
        feature:
          'Es mayor resistente a los agentes corrosivos presente en los suelos y productos transportados, entre los cuales se encuentran una gran variedad de ácidos y álcalis, además para el transporte de agua potable, este tipo de material no altera su calidad, ya que no aporta elementos que puedan ser tóxicos para el consumo humano.',
      },
      {
        name:'Convención',
        title: 'Válvula De Globo',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/hidraulicas/valvulaDeGlobo.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasHidraulicas/valvulaDeGlobo.png',
        concept: 'Las válvulas de globo son válvulas de movimiento lineal y están diseñadas básicamente para interrumpir e iniciar el flujo. El disco de una válvula de globo puede apartarse totalmente de la ruta del flujo o puede cerrar el flujo por completo. El principio fundamental del funcionamiento de las válvulas de globo es el movimiento perpendicular del disco en relación con el asiento.',
        feature:
          'Existen tres diseños básicos para el cuerpo de las válvulas de globo (cuerpo en T, cuerpo en (Y) y cuerpo en ángulo), todos los diseños pueden aplicarse en soluciones con tapa atornillada o tapa de cierre a presión (Pressure Seal).',
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
        title: 'Tubería Sanitaria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/tuberiaSanitaria.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/tuberiaSanitaria.png',
        concept: 'La tubería de agua sanitaria es un conducto que cumple la función de evacuar las aguas residuales de la edificación.',
        feature:
          'Está diseñada para transportar agua servida, residual doméstica, industrial, aguas lluvia y ventilación. Los tubos vienen de extremo liso y los accesorios con campana. El sistema de unión por medio de soldadura líquida, forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo',
      },
      {
        name:'Convención',
        title: 'Unión Sanitaria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/unionSanitaria.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/unionSanitaria.png',
        concept: 'Accesorio que permite la unión entre dos tubos',
        feature:
          'Está diseñada para transportar agua servida, residual doméstica, industrial, aguas lluvia y ventilación. Los tubos vienen de extremo liso y los accesorios con campana. El sistema de unión por medio de soldadura líquida, forma un conjunto homogéneo que desarrolla máxima resistencia en un mínimo de tiempo',
      },
      {
        name:'Convención',
        title: 'Buje',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/buje.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/buje.png',
        concept: 'Accesorio utilizado para pasar de un diámetro de tubería o accesorio mayor a un diámetro menor.',
        feature:
          'Pieza necesaria para realizar conexiones hídricas seguras a nivel industrial y doméstico ya que su estructura permite extender la capacidad de la tubería otorgándote mayor economía en tus proyectos de reparación o instalación de sistemas sanitarios.',
      },
      {
        name:'Convención',
        title: 'Codo 45°',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/codoSanitario45.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/codo45.png',
        concept: 'Accesorio que permite la conducción de las aguas lluvias o servidas y evacuarlas a un ángulo de 45°',
        feature:
          'Accesorio indicado para lograr desviaciones de ángulo recto sobre la línea de las tuberías. Este accesorio está hecho en su totalidad de PVC, un material que no transmite olor ni sabor al agua y resiste líquidos con una temperatura de hasta 30 °C.',
      },
      {
        name:'Convención',
        title: 'codo 90°',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/codoSanitario90.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/codo90.png',
        concept: 'Accesorio que permite la conducción de las aguas lluvias o servidas y evacuarlas a un ángulo de 90°',
        feature:
          'Accesorio indicado para lograr desviaciones de ángulo recto sobre la línea de las tuberías. Este accesorio está hecho en su totalidad de PVC, un material que no transmite olor ni sabor al agua y resiste líquidos con una temperatura de hasta 30 °C.',
      },
      {
        name:'Convención',
        title: 'Codo Reventilado',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/codoSanitarioReventilado.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/codoSanitarioReventilado.png',
        concept: 'Codo Reventilado, se utiliza para ensamblar las partes en redes de tuberías , sirve para re-direccionar el flujo de aguas residuales, la conexión extra en la parte superior permite conectar el subsistema de ventilación de tuberías',
        feature:
          'Práctico y fácil de usar, es resistente a la corrosión y resistente a altas presiones, sus Componentese le dan flexibilidad a la hora de montar la estructura permitiendo adaptarse a cualquier ángulo y dirección.',
      },
      {
        name:'Convención',
        title: 'Sifón',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/sifon.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/sifon.png',
        concept: 'Consiste en un tubo en forma de «U», de manera que, al desaguar el aparato, el agua llena las dos ramas del tubo, hasta el nivel de desagüe de la segunda, manteniendo un tapón de agua limpia que cierra la entrada de olores.',
        feature:
          'Su forma permite que un líquido fluya hacia arriba, por encima de la superficie de un depósito, sin bomba. Solo impulsado por la caída del líquido a medida que fluye por el tubo bajo la fuerza de la gravedad.',
      },
      {
        name:'Convención',
        title: 'Tapon De Prueba',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/taponDeprueba.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/taponDePrueba.png',
        concept: 'Accesorio que  permite el cierre de los extremos de la red sanitaria para sus correspondientes pruebas de hermeticidad.',
        feature:
          'Pruebas seguras y confiables a presiones más altas, ahorra hasta un 90 % en tiempo de prueba en comparación con los procedimientos de prueba con tapa soldada del extremo, su diseño patentado de sujetador don doble diente proporciona más puntos de sujeción en las superficies internas del tubo.',
      },
      {
        name:'Convención',
        title: 'Tee Sanitaria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/teeSanitaria.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/teeSanitaria.png',
        concept: 'La conexión tee, está diseñada para unir tres diferentes tramos de tubería de en un ángulo de 90° para redireccionar y permitir la conducción de agua.',
        feature:
          'Utilizada en múltiples aplicaciones y es químicamente resistente a los efluentes provenientes de los desagües. Gracias a su material en PVC, cuenta con una larga vida útil y es una excelente alternativa para los proyectistas más exigentes.',
      },
      {
        name:'Convención',
        title: 'Tee Doble',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/teeSanitariaDoble.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/teeSanitariaDoble.png',
        concept: 'La conexión tee doble, está diseñada para unir cuatro diferentes tramos de tubería de en un ángulo de 90° para redireccionar y permitir la conducción de agua.',
        feature:
          'Excelente condiciones de flujo gracias a su bajo coeficiente de rugosidad, brinda un excelente acoplamiento tubo-conexión y ofrece una fácil y rápida instalación.',
      },
      {
        name:'Convención',
        title: 'Yee Sanitaria',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/yeeSanitaria.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/yeeSanitaria.png',
        concept: 'La conexión yee, está diseñada para unir tres diferentes tramos de tubería de en un ángulo de 45° para redireccionar y permitir la conducción de agua.',
        feature:
          'Práctico y fácil de usar, es resistente a la corrosión, además es resistente a altas presiones y tiene alta resistencia química.',
      },
      {
        name:'Convención',
        title: 'Yee Doble',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/yeeSanitariaDoble.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/yeeSanitariaDoble.png',
        concept: 'La conexión yee doble, está diseñada para unir cuatro diferentes tramos de tubería de en un ángulo de 45° para redireccionar y permitir la conducción de agua.',
        feature:
          'Conexión para cementar en sistemas de tuberías sanitarias, tienen como función la recolección y evacuación de residuos provenientes de los desechos domiciliarios como lavabos, fregaderos, sanitarios etc. con la finalidad de realizar las descargas al drenaje sanitario.',
      },
      {
        name:'Convención',
        title: 'Lavadero',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/lavadero.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/lavadero.png',
        concept: 'Pila o recipiente grande que sirve para lavar la ropa.',
        feature:
          'Un lavadero dispone, por lo general, de una tabla o piedra lisa que en algunas partes de América se llama batea.',
      },
      {
        name:'Convención',
        title: 'Lavadora',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/lavadora.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/lavadora.png',
        concept: 'Aparato electrodoméstico que sirve para lavar la ropa.',
        feature:
          'Tienen un tambor central grande con orificios, dentro de otro tambor cerrado, mientras entra agua, haciendo que se mezcle el (detergente) con la ropa sucia, además el tambor se mueve con un motor eléctrico',
      },
      {
        name:'Convención',
        title: 'Lavamanos',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/lavamanos.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/lavamanos.png',
        concept: 'Se llama lavabo o lavamanos al recipiente en el que se vierte el agua para el aseo personal.',
        feature:
          'Resistente a la corrosión, pelado y decoloración por agua, es resistente al efecto de jabones y limpiadores de tocador, posee unos recubrimientos no tóxicos y es pra uso domestico.',
      },
      {
        name:'Convención',
        title: 'Lavaplatos',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/lavaplatos.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/lavaplatos.png',
        concept: 'Recipiente que sirve para lavar platos, cubiertos y otros utensilios de cocina.',
        feature:
          'El lavavajillas cuenta con una o más bandejas extraíbles en las que se coloca la vajilla, generalmente de distintas alturas. Fabricadas en plástico o metal, las bandejas suelen estar diseñadas para introducir el mayor número de elementos: los platos apoyados en soportes verticales, los vasos en una cubeta, etc.',
      },
      {
        name:'Convención',
        title: 'Orinal',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/orinal.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/orinal.png',
        concept: 'Un urinario o mingitorio es un objeto utilizado para orinar, generalmente ubicado en baños públicos masculinos.',
        feature:
          'Los urinarios modernos tienen descargas de tres a cuatro litros por descarga, lo cual resulta menor que la de un inodoro. Suelen contener desinfectantes con desodorizante para evitar olores desagradables y mantener la limpieza del lugar.',
      },
      {
        name:'Convención',
        title: 'Sanitario',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/sanitario.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/sanitario.png',
        concept: 'Aparato sanitario para evacuar los excrementos y la orina, provisto de un sifón que evita los malos olores.',
        feature:
          'Maneja un tipo instalación fácil y rápida, además posee un manejo eficiente del agua y un excelente consumo.',
      },
      {
        name:'Convención',
        title: 'Tubería De Aguas Lluvias',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/tuberiaAguasLluvias.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/tuberiaDeAguasLluvias.png',
        concept: 'La tubería de agua lluvia es un conducto que cumple la función de evacuar las aguas lluvias de la edificación.',
        feature:
          'Infraestructura que permite la conducción y distribución del agua captada desde la fuente hasta el almacenamiento.',
      },
      {
        name:'Convención',
        title: 'Tubería Ventilación',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/tuberiaVentilacion.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/tuberiaVentilacion.png',
        concept: 'La tubería de ventilación es un conducto que cumple la función de evacuar los gases que se acumulan en el interior de las tuberías y permiten el aireamiento a una presión atmosférica necesaria para preservar los sellos hidráulicos de los sifones en laedificación.',
        feature:
        'Diseño flexible y adaptabilidad a diversos contextos, no se requiere energía eléctrica para su funcionamiento y su costo de instalación relativamente es muy bajo',
      },
      {
        name:'Convención',
        title: 'Caja De Inspección',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/cajaDeInspeccion.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/cajaDeInspeccion.png',
        concept: 'Cámara que se instala en los cambios de dirección, diámetro o pendiente en las tuberías de alcantarillado de la red, la cual  sirve para permitir la inspección y mantenimiento de los colectores.',
        feature:
          '"Hueco" o cámara construidos de bloques y hormigón armado, que se coloca en las intersecciones de las líneas colectoras con las diferentes tuberías que les son conectadas así como también en los cambios de direcciones, con el objetivo de inspeccionar y limpiar las líneas',
      },
      {
        name:'Convención',
        title: 'Adaptador De Limpieza',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/adaptadorDeLimpieza.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/adaptadorDeLimpieza.png',
        concept: 'Accesorio ubicado en punto estratégicos que permita la fácil limpieza de la red sanitaria. ',
        feature:
          'Accesorio que cuenta con una excelente resistencia a la corrosión, es fácil de instalar, durabl, debido a que, cuenta con una vida útil estimada de 50 años, además es Liviana y resistente al impacto',
        },
      {
        name:'Convención',
        title: 'Bajante Agua Lluvia',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/bajanteAguasLluvia.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/bajanteAguaLluvia.png',
        concept: 'El bajante de agus lluvias es un conducto vertical encargado de recoger las aguas que se reciben por lluvia o nieve, en los techos o cubiertas',
        feature:
          'La característica común de todos los tipos de tuberías bajantes es evacuar al exterior del edificio las aguas residuales o de lluvia sin causar ningún tipo de molestias. Es decir, no provocar ni ruidos o malos olores en las viviendas.',
      },
      {
        name:'Convención',
        title: 'Bajante Agua Residual',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/sanitarias/bajanteAguasResiduales.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasSanitarias/bajanteAguaResidual.png',
        concept: 'Se llama bajante a la tubería vertical destinada a recoger las aguas vertidas por las derivaciones en cada piso o planta de viviendas',
        feature:
          'Las bajantes deben ser perfectamente verticales, sin desviaciones ni retranqueos, y deben guardar el mismo diámetro en todo su recorrido, no debiendo disminuir nunca el mismo en el sentido descendente.',
      },
    ],
    "Gas": [
      {
        name:'Convención',
        title: 'Tubería Multicapa',
        convencion:
        '../../assets/svg/sourceInstallation/convenciones/gas/tuberiaMulticapa.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/tuberiaMulticapa.png',
        concept: 'Tubería Multicapa PE AL PE, compuesta por tres capa Polietileno, Aluminio y Polietileno, unidas con material adhesivo especialmente para este sistema.Usadas generalmente en las instalaciones internas domiciliarias de gas natural para transportar el mismo hacia los artefactos de consumo.',
        feature:
        'Resistencia a la corrosión. maneja altas temperaturas y presiones, además tiene alto nivel de flexibilidad, es fácil su instalación y tiene menor costo en la instalación y transporte.',
      },
      {
        name:'Convención',
        title: 'Válvula PE AL PE',
        convencion:
        '../../assets/svg/sourceInstallation/convenciones/gas/valvulas.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/valvulaPE_AL_PE.png',
        concept: 'Válvulas de cierre tipo bola para tuberías multicapas y conexiones PE AL PE. Cuerpo de latón con extremos roscados. Usualmente utilizadas en instalaciones internas domiciliarias de gas natural.',
        feature:
        'Resistencia a la corrosión, temperatura y presión, y además tiene una fácil instalación.',
      },
      {
        name:'Convención',
        title: 'Codo 90° EPC',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/gas/codoDeCobreEPC.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/codo90.png',
        concept: 'Es un accesorio diseñado para la unión de tubería destinada para aplicaciones domésticas y semi industriales como riego, albercas y tinas de hidromasaje; resiste fluidos con una temperatura máxima de 30 °C.',
        feature:
          'Gran resistencia a las fracturas por impacto, resistente a la corrosión, oxidación e incrustaciones y a la intemperie, no contamina los fluidos que transporta y no genera par galvánico.',
      },
      {
        name:'Convención',
        title: 'Codo 45° EPC',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/gas/codo45.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/codo45.png',
        concept: 'Es un accesorio diseñado para la unión de tubería destinada para aplicaciones domésticas y semi industriales como riego, albercas y tinas de hidromasaje; resiste fluidos con una temperatura máxima de 30 °C.',
        feature:
          'Gran resistencia a las fracturas por impacto, resistente a la corrosión, oxidación e incrustaciones y a la intemperie, no contamina los fluidos que transporta y no genera par galvánico.',
      },
      {
        name:'Convención',
        title: 'Tapón Copa',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/gas/taponCopaCobre.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/taponCopa.png',
        concept: 'Piezas terminales que cierran una tubería, puede ser un cierre estanco o con registro. Su objetivo es bloquear o impedir el paso o salida de fluidos en momentos determinados. Son utilizados en tuberías de menor diámetro y según su forma de instalación pueden ser soldados o roscados. se unen con soldadura, apriete mecánico o adhesivo.',
        feature:
          'Accesorio de plomería, tipo tapón, de alta resistencia a la oxidación, agua fría compacto. Los tapones son usados para sellar el final de la tubería, ya sea temporal o permanentemente.',
      },
      {
        name:'Convención',
        title: 'Tee EPC',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/gas/teeDeCobreEPC.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/tee.png',
        concept: 'Tee (T):  accesorio en  forma  de  T  que  permite  realizar  una  conexión  a  tres bandas.  También  llamada  racor  en  T.  Los  diámetros  de  las  distintas  salidas pueden ser del mismo tamaño o distinto, se unen con soldadura, apriete mecanico o adhesivo.',
        feature:
          'Las tees existen en diámetros desde 1/2 "" hasta 4 "" en el tipo fabricación, su espesor depende del tubo o accesorio al cual va instalada y su dimensión es la medida del centro a cualquiera de las bocas de la tee.',
      },
      {
        name:'Convención',
        title: 'Universal EPC',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/gas/universalDeCobreEPC.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/universalEPC.png',
        concept: 'Esta pieza se puede roscar y desenroscar, lo que permite que se pueda retirar una de las partes del sistema que se han unido por esta conexión, además sus dos extremos son lisos y llevan una rosca en la parte media del accesorio.',
        feature:
          'Fabricado en fundición dúctil con revestimiento epóxico electrostático, utilizado para unir dos espigas de tubo de cualquier material tales como: Acero, hierro fundido dúctil o gris, asbesto cemento, PVC excepto el HDPE.',
      },
      {
        name:'Convención',
        title: 'Unión de cobre',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/gas/unionDeCobre.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/unionDeCobre.png',
        concept: 'Accesorio de instalación utilizado en uniones de tubos en las instalaciones varias. da más seguridad a la hora de unión de tuberías y el acceso de la sustancias para no tener fugas, puede ser usado en sistemas de Aire Acondicionado y refrigeración.',
        feature:
          'Posee una combinación de propiedades naturales que le dotan de una alta resistencia, no sufre corrosión, no se degrada con el tiempo y conserva inalterables sus características físicas y químicas.',
      },
      {
        name:'Convención',
        title: 'Válvula Decorativa',
        convencion:
        '../../assets/svg/sourceInstallation/convenciones/gas/valvulaDecorativa.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/valvulaDecorativa.png',
        concept: 'Válvulas de cierre cromadas decorativas tipo bola para tuberías multicapas y conexiones PE AL PE.Cuerpo de latón con extremos roscados. Usualmente utilizadas en instalaciones internas domiciliarias de gas natural.',
        feature:
        'Resistencia a la corrosión, temperatura y presión, y tiene una fácil instalación.',
      },
      {
        name:'Convención',
        title: 'Conector De Manguera',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/gas/tuberiaMulticapa.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/conectorDeManguera.png',
        concept: 'Mangueras para Gas Natural 3/8" - Terminales de 1/2"',
        feature:
          'Manguera de 1.50 mts Terminal Hembra - Hembra (Tuerca Giratoria), manguera de 1.30 mts Terminal Macho - Macho, manguera de 60 cm Terminal Macho - Hembra (Tuerca Giratoria), manguera de 50 cm Terminal Macho - Hembra (Tuerca Giratoria), manguera de 40 cm Terminal Macho - Hembra (Tuerca Giratoria).',
      },
      {
        name:'Convención',
        title: 'Tuberia De Temple Flexible',
        convencion:
          '../../assets/svg/sourceInstallation/convenciones/gas/tuberiaCobreTempleFlexible.svg',
        img: '../../assets/svg/sourceInstallation/piezas/piezasGas/tuberiaDeTempleFlexible.png',
        concept: 'Tuberia Tipo L rigida: Se usa para la Refrigeracion y el Gas Domiciliario . Sus medidas son: Diametro de 1/4" hasta 6" en Longitudes x 6.00 m.',
        feature:
          'Las características de las tuberías flexibles de cobre difieren de tuberías rígidas, precisamente en el temple dado en su proceso de fabricación; por lo tanto, las condiciones de uso serán diferentes aún cuando las tuberías de los dos temples sean parte de una misma aleación.',
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
  }


  ngOnInit() {
    this.slides.slideTo(0);
  }

}
