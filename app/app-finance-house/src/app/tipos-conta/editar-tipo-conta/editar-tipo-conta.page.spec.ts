import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarTipoContaPage } from './editar-tipo-conta.page';

describe('EditarTipoContaPage', () => {
  let component: EditarTipoContaPage;
  let fixture: ComponentFixture<EditarTipoContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTipoContaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTipoContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
