import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuMaisOpcoesPage } from './menu-mais-opcoes.page';

describe('MenuMaisOpcoesPage', () => {
  let component: MenuMaisOpcoesPage;
  let fixture: ComponentFixture<MenuMaisOpcoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMaisOpcoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMaisOpcoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
