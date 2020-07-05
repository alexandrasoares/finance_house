import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarSubcategoriasPage } from './editar-subcategorias.page';

describe('EditarSubcategoriasPage', () => {
  let component: EditarSubcategoriasPage;
  let fixture: ComponentFixture<EditarSubcategoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSubcategoriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarSubcategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
