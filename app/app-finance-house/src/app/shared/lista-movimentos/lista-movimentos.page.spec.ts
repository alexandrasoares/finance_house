import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaMovimentosPage } from './lista-movimentos.page';

describe('ListaMovimentosPage', () => {
  let component: ListaMovimentosPage;
  let fixture: ComponentFixture<ListaMovimentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMovimentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMovimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
