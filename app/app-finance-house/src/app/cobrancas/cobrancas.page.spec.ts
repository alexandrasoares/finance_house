import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CobrancasPage } from './cobrancas.page';

describe('CobrancasPage', () => {
  let component: CobrancasPage;
  let fixture: ComponentFixture<CobrancasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobrancasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CobrancasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
