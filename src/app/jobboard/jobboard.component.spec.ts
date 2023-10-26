import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobboardComponent } from './jobboard.component';

describe('JobboardComponent', () => {
  let component: JobboardComponent;
  let fixture: ComponentFixture<JobboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobboardComponent]
    });
    fixture = TestBed.createComponent(JobboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
