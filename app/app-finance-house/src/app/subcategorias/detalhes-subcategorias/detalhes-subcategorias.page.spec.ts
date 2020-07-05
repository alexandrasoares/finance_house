import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhesSubcategoriasPage } from './detalhes-subcategorias.page';

describe('DetalhesSubcategoriasPage', () => {
  let component: DetalhesSubcategoriasPage;
  let fixture: ComponentFixture<DetalhesSubcategoriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesSubcategoriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesSubcategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
