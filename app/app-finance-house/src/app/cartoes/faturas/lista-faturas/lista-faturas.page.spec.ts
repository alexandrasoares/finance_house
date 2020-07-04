import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaFaturasPage } from './lista-faturas.page';

describe('ListaFaturasPage', () => {
  let component: ListaFaturasPage;
  let fixture: ComponentFixture<ListaFaturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFaturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaFaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
