import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListPageComponent } from './data-list-page.component';

describe('DataListPageComponent', () => {
  let component: DataListPageComponent;
  let fixture: ComponentFixture<DataListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
