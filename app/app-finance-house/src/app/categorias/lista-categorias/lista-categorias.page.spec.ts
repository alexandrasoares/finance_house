import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCategoriasPage } from './lista-categorias.page';

describe('ListaCategoriasPage', () => {
  let component: ListaCategoriasPage;
  let fixture: ComponentFixture<ListaCategoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCategoriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
