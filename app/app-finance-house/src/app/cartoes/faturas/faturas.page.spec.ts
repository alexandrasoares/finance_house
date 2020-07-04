import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaturasPage } from './faturas.page';

describe('FaturasPage', () => {
  let component: FaturasPage;
  let fixture: ComponentFixture<FaturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
