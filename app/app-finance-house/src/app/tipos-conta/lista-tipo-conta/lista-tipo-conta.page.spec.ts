import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaTipoContaPage } from './lista-tipo-conta.page';

describe('ListaTipoContaPage', () => {
  let component: ListaTipoContaPage;
  let fixture: ComponentFixture<ListaTipoContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTipoContaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTipoContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
