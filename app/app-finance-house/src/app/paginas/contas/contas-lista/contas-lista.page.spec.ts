import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContasListaPage } from './contas-lista.page';

describe('ContasListaPage', () => {
  let component: ContasListaPage;
  let fixture: ComponentFixture<ContasListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContasListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
