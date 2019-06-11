import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInComponent } from './test-in.component';

describe('TestInComponent', () => {
  let component: TestInComponent;
  let fixture: ComponentFixture<TestInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
