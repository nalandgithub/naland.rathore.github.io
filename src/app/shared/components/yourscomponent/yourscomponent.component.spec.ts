import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourscomponentComponent } from './yourscomponent.component';

describe('YourscomponentComponent', () => {
  let component: YourscomponentComponent;
  let fixture: ComponentFixture<YourscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourscomponentComponent]
    });
    fixture = TestBed.createComponent(YourscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
