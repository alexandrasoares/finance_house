import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideInicialPage } from './slide-inicial.page';

describe('SlideInicialPage', () => {
  let component: SlideInicialPage;
  let fixture: ComponentFixture<SlideInicialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideInicialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
