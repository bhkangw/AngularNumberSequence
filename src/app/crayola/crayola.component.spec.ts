import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrayolaComponent } from './crayola.component';

describe('CrayolaComponent', () => {
  let component: CrayolaComponent;
  let fixture: ComponentFixture<CrayolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrayolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrayolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
