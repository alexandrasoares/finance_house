import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagarCobrancaPage } from './pagar-cobranca.page';

describe('PagarCobrancaPage', () => {
  let component: PagarCobrancaPage;
  let fixture: ComponentFixture<PagarCobrancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarCobrancaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagarCobrancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
