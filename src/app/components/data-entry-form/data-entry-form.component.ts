import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { 
  FormBuilder,
  FormGroup, 
  FormControl,
  FormsModule, 
  ReactiveFormsModule,
  Validators,
  FormGroupDirective,
  NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

import { AnalyticsDataPostService } from '../../shared/services/analytics-data-post.service';

export class DataErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-data-entry-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './data-entry-form.component.html',
  styleUrl: './data-entry-form.component.scss'
})
export class DataEntryFormComponent implements OnInit {

  dataEntryForm: FormGroup;

  usage = new FormControl('', [Validators.required]);
  traffic = new FormControl('', [Validators.required]);
  dataTransfer = new FormControl('', [Validators.required]);
  coverage = new FormControl('', [Validators.required]);
  timeLapsed = new FormControl('', [Validators.required]);
  populationShare = new FormControl('', [Validators.required]);

  matcher = new DataErrorStateMatcher();

  floatLabelControl = new FormControl('auto' as FloatLabelType);

  positionOptions: TooltipPosition[] = ['below'];
  position = new FormControl(this.positionOptions[0]);

  hasAcceptedPP = false;

  minDate: Date;
  maxDate: Date;

  ageGroups: string[] = [
    '20-30',
    '30-40',
    '40-50',
    '50-60',
    '60-70',
    '70-80',
    '80-90'
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _dataPostService: AnalyticsDataPostService
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 80, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.dataEntryForm = this._formBuilder.group({
      usage: this.usage,
      traffic: this.traffic,
      dataTransfer: this.dataTransfer,
      coverage: this.coverage,
      timeLapsed: this.timeLapsed,
      populationShare: this.populationShare,
      floatLabel: this.floatLabelControl
    });
  }

  enterData() {
    if (this.dataEntryForm.valid) {
      this._dataPostService.saveData(this.dataEntryForm.value).subscribe({
        next: (data) => {
          console.log('Data entered: ', data);
          this.dataEntryForm.reset();
          this._router.navigate(['/data-list']);
        },
        error: (error) => {
          console.error('Error generating data: ', error);
        }
      });
    }
  }

  acceptPP() {
    this.hasAcceptedPP = !(this.hasAcceptedPP);
    if (this.hasAcceptedPP) {
      this.openSnackBar('The form can now be submitted', 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
