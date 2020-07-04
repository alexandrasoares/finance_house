import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovimentosPage } from './movimentos.page';

describe('MovimentosPage', () => {
  let component: MovimentosPage;
  let fixture: ComponentFixture<MovimentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
