import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameChooseTheDescriptionComponent } from './game-choose-the-description.component';

describe('GameChooseTheDescriptionComponent', () => {
  let component: GameChooseTheDescriptionComponent;
  let fixture: ComponentFixture<GameChooseTheDescriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameChooseTheDescriptionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameChooseTheDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
