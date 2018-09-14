import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatterComponent } from './catter.component';

describe('CatterComponent', () => {
  let component: CatterComponent;
  let fixture: ComponentFixture<CatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
