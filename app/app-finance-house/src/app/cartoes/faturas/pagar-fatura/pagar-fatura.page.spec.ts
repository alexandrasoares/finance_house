import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagarFaturaPage } from './pagar-fatura.page';

describe('PagarFaturaPage', () => {
  let component: PagarFaturaPage;
  let fixture: ComponentFixture<PagarFaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarFaturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagarFaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
