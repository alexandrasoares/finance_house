import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCartoesPage } from './lista-cartoes.page';

describe('ListaCartoesPage', () => {
  let component: ListaCartoesPage;
  let fixture: ComponentFixture<ListaCartoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCartoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCartoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
