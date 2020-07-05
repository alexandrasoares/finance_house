import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCobrancaPage } from './lista-cobranca.page';

describe('ListaCobrancaPage', () => {
  let component: ListaCobrancaPage;
  let fixture: ComponentFixture<ListaCobrancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCobrancaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCobrancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
