import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirTipoContaPage } from './inserir-tipo-conta.page';

describe('InserirTipoContaPage', () => {
  let component: InserirTipoContaPage;
  let fixture: ComponentFixture<InserirTipoContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirTipoContaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirTipoContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
