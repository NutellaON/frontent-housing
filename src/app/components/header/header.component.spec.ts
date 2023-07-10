import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingComponent } from './header.component';

describe('HeadingComponent', () => {
  let component: HeadingComponent;
  let fixture: ComponentFixture<HeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadingComponent]
    });
    fixture = TestBed.createComponent(HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
