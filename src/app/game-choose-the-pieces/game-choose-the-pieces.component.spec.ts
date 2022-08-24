import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameChooseThePiecesComponent } from './game-choose-the-pieces.component';

describe('GameChooseThePiecesComponent', () => {
  let component: GameChooseThePiecesComponent;
  let fixture: ComponentFixture<GameChooseThePiecesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameChooseThePiecesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameChooseThePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
