import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiposContaPage } from './tipos-conta.page';

describe('TiposContaPage', () => {
  let component: TiposContaPage;
  let fixture: ComponentFixture<TiposContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposContaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiposContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
