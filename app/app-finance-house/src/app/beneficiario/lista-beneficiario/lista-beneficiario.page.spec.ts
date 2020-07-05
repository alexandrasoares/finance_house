import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaBeneficiarioPage } from './lista-beneficiario.page';

describe('ListaBeneficiarioPage', () => {
  let component: ListaBeneficiarioPage;
  let fixture: ComponentFixture<ListaBeneficiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBeneficiarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaBeneficiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
