import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertaContribuintesPage } from './alerta-contribuintes.page';

describe('AlertaContribuintesPage', () => {
  let component: AlertaContribuintesPage;
  let fixture: ComponentFixture<AlertaContribuintesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaContribuintesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertaContribuintesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
