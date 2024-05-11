import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumermanagementComponent } from './costumermanagement.component';

describe('CostumermanagementComponent', () => {
  let component: CostumermanagementComponent;
  let fixture: ComponentFixture<CostumermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostumermanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostumermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
