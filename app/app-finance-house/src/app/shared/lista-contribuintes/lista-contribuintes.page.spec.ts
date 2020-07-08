import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaContribuintesPage } from './lista-contribuintes.page';

describe('ListaContribuintesPage', () => {
  let component: ListaContribuintesPage;
  let fixture: ComponentFixture<ListaContribuintesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaContribuintesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaContribuintesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
