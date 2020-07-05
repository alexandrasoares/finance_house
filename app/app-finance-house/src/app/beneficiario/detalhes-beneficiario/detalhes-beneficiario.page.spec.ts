import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhesBeneficiarioPage } from './detalhes-beneficiario.page';

describe('DetalhesBeneficiarioPage', () => {
  let component: DetalhesBeneficiarioPage;
  let fixture: ComponentFixture<DetalhesBeneficiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesBeneficiarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesBeneficiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
