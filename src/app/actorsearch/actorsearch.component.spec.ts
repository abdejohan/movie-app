import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsearchComponent } from './actorsearch.component';

describe('ActorsearchComponent', () => {
  let component: ActorsearchComponent;
  let fixture: ComponentFixture<ActorsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
