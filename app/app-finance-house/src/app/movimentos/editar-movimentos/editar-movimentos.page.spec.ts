import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarMovimentosPage } from './editar-movimentos.page';

describe('EditarMovimentosPage', () => {
  let component: EditarMovimentosPage;
  let fixture: ComponentFixture<EditarMovimentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMovimentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarMovimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
