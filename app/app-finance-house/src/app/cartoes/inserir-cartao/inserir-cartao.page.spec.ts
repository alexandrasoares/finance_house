import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirCartaoPage } from './inserir-cartao.page';

describe('InserirCartaoPage', () => {
  let component: InserirCartaoPage;
  let fixture: ComponentFixture<InserirCartaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirCartaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirCartaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
