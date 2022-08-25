import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-choose-the-description',
  templateUrl: './game-choose-the-description.component.html',
  styleUrls: ['./game-choose-the-description.component.scss'],
})
export class GameChooseTheDescriptionComponent implements OnInit {
  public options: { img: string; description: string }[] = [
    {
      img: '../../assets/svg/sourceVulnerabilidad/prime/portadaCartillaV.svg',
      description: 'Se calcula que la producción de cemento es causante de hasta el 5% de las emisiones de CO2 a nivel mundial',
    },
    {
      img: '../../assets/svg/sourceMaterialDeApoyo/portada_Normas.svg',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de',
    },
    {
      img: '../../assets/svg/sourceMaterialDeApoyo/portada_Videos.svg',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías .',
    },
    {
      img: '../../assets/svg/sourceMaterialDeApoyo/portada_Videos.svg',
      description:
        'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores',
    },
  ];

  constructor() {}

  ngOnInit() {}

  select() {}
}
