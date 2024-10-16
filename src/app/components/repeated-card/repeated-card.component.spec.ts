import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatedCardComponent } from './repeated-card.component';

describe('RepeatedCardComponent', () => {
  let component: RepeatedCardComponent;
  let fixture: ComponentFixture<RepeatedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatedCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepeatedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
