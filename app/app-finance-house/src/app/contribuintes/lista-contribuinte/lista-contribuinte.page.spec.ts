import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaContribuintePage } from './lista-contribuinte.page';

describe('ListaContribuintePage', () => {
  let component: ListaContribuintePage;
  let fixture: ComponentFixture<ListaContribuintePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaContribuintePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaContribuintePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
