import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirMovimentosPage } from './inserir-movimentos.page';

describe('InserirMovimentosPage', () => {
  let component: InserirMovimentosPage;
  let fixture: ComponentFixture<InserirMovimentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirMovimentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirMovimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
