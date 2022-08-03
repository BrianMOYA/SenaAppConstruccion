import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectTheCorrectPairComponent } from './select-the-correct-pair.component';

describe('SelectTheCorrectPairComponent', () => {
  let component: SelectTheCorrectPairComponent;
  let fixture: ComponentFixture<SelectTheCorrectPairComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTheCorrectPairComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectTheCorrectPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
