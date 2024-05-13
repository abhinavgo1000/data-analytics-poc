import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEditPageComponent } from './data-edit-page.component';

describe('DataEditPageComponent', () => {
  let component: DataEditPageComponent;
  let fixture: ComponentFixture<DataEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
