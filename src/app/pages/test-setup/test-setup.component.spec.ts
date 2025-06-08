import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSetupComponent } from './test-setup.component';

describe('TestSetupComponent', () => {
  let component: TestSetupComponent;
  let fixture: ComponentFixture<TestSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
