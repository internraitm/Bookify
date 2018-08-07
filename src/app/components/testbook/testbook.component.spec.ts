import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbookComponent } from './testbook.component';

describe('TestbookComponent', () => {
  let component: TestbookComponent;
  let fixture: ComponentFixture<TestbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
