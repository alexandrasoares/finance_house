import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirFaturaPage } from './inserir-fatura.page';

describe('InserirFaturaPage', () => {
  let component: InserirFaturaPage;
  let fixture: ComponentFixture<InserirFaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirFaturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirFaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
