import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirContribuintePage } from './inserir-contribuinte.page';

describe('InserirContribuintePage', () => {
  let component: InserirContribuintePage;
  let fixture: ComponentFixture<InserirContribuintePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirContribuintePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirContribuintePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
