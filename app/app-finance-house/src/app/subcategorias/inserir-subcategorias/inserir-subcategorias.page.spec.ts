import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirSubcategoriasPage } from './inserir-subcategorias.page';

describe('InserirSubcategoriasPage', () => {
  let component: InserirSubcategoriasPage;
  let fixture: ComponentFixture<InserirSubcategoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirSubcategoriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirSubcategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
