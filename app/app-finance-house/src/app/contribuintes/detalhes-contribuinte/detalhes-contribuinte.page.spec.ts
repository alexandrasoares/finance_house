import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhesContribuintePage } from './detalhes-contribuinte.page';

describe('DetalhesContribuintePage', () => {
  let component: DetalhesContribuintePage;
  let fixture: ComponentFixture<DetalhesContribuintePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesContribuintePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesContribuintePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
