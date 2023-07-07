import { Component } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css'],
  // imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
})

export class DateRangePickerComponent {}
