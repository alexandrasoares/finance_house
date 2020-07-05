import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemoverCobrancaPage } from './remover-cobranca.page';

describe('RemoverCobrancaPage', () => {
  let component: RemoverCobrancaPage;
  let fixture: ComponentFixture<RemoverCobrancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverCobrancaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemoverCobrancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
