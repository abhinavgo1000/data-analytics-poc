import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDeleteDialogComponent } from './data-delete-dialog.component';

describe('DataDeleteDialogComponent', () => {
  let component: DataDeleteDialogComponent;
  let fixture: ComponentFixture<DataDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDeleteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
