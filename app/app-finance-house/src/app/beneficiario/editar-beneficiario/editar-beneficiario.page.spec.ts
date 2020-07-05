import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarBeneficiarioPage } from './editar-beneficiario.page';

describe('EditarBeneficiarioPage', () => {
  let component: EditarBeneficiarioPage;
  let fixture: ComponentFixture<EditarBeneficiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarBeneficiarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarBeneficiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
