import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartoesPage } from './cartoes.page';

describe('CartoesPage', () => {
  let component: CartoesPage;
  let fixture: ComponentFixture<CartoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
