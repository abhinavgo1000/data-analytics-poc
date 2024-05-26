import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRoutingButtonComponent } from './icon-routing-button.component';

describe('IconRoutingButtonComponent', () => {
  let component: IconRoutingButtonComponent;
  let fixture: ComponentFixture<IconRoutingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconRoutingButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconRoutingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
