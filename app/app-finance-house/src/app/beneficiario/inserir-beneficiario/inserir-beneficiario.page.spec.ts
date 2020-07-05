import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirBeneficiarioPage } from './inserir-beneficiario.page';

describe('InserirBeneficiarioPage', () => {
  let component: InserirBeneficiarioPage;
  let fixture: ComponentFixture<InserirBeneficiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirBeneficiarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirBeneficiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
