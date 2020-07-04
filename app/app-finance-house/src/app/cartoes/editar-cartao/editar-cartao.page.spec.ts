import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarCartaoPage } from './editar-cartao.page';

describe('EditarCartaoPage', () => {
  let component: EditarCartaoPage;
  let fixture: ComponentFixture<EditarCartaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCartaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCartaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
