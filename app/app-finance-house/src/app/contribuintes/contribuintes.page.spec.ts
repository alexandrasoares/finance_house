import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContribuintesPage } from './contribuintes.page';

describe('ContribuintesPage', () => {
  let component: ContribuintesPage;
  let fixture: ComponentFixture<ContribuintesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuintesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContribuintesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
