import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LContribuintesPage } from './l-contribuintes.page';

describe('LContribuintesPage', () => {
  let component: LContribuintesPage;
  let fixture: ComponentFixture<LContribuintesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LContribuintesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LContribuintesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
