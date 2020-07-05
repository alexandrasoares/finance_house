import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarContaPage } from './editar-conta.page';

describe('EditarContaPage', () => {
  let component: EditarContaPage;
  let fixture: ComponentFixture<EditarContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarContaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
