import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeneficiarioPage } from './beneficiario.page';

describe('BeneficiarioPage', () => {
  let component: BeneficiarioPage;
  let fixture: ComponentFixture<BeneficiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeneficiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
