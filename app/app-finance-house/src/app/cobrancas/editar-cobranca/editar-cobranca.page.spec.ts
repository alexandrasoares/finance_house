import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarCobrancaPage } from './editar-cobranca.page';

describe('EditarCobrancaPage', () => {
  let component: EditarCobrancaPage;
  let fixture: ComponentFixture<EditarCobrancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCobrancaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCobrancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
