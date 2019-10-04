import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfunctionalityComponent } from './userfunctionality.component';

describe('UserfunctionalityComponent', () => {
  let component: UserfunctionalityComponent;
  let fixture: ComponentFixture<UserfunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfunctionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
