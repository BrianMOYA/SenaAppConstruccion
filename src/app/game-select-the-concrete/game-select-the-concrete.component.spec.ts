import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameSelectTheConcreteComponent } from './game-select-the-concrete.component';

describe('GameSelectTheConcreteComponent', () => {
  let component: GameSelectTheConcreteComponent;
  let fixture: ComponentFixture<GameSelectTheConcreteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSelectTheConcreteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameSelectTheConcreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
