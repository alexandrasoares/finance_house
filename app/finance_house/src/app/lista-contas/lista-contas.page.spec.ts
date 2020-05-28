import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaContasPage } from './lista-contas.page';

describe('ListaContasPage', () => {
  let component: ListaContasPage;
  let fixture: ComponentFixture<ListaContasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaContasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaContasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
