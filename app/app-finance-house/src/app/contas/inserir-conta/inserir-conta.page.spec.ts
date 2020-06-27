import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirContaPage } from './inserir-conta.page';

describe('InserirContaPage', () => {
  let component: InserirContaPage;
  let fixture: ComponentFixture<InserirContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirContaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
