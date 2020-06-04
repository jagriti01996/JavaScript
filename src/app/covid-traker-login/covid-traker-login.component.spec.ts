import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTrakerLoginComponent } from './covid-traker-login.component';

describe('CovidTrakerLoginComponent', () => {
  let component: CovidTrakerLoginComponent;
  let fixture: ComponentFixture<CovidTrakerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidTrakerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTrakerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
