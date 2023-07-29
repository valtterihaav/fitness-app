import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import  {MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common'
import { ChartDataset } from 'chart.js';
import { firstValueFrom, of } from 'rxjs';


@Component({
  selector: 'date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css'],
  // imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
})

export class DateRangePickerComponent implements OnInit
{
  @Output() dateChanged = new EventEmitter();
  startDate: Date | null = new Date();
  endDate: Date | null = new Date();
  startDateFormatted: string | null = null
  endDateFormatted: string | null = null

  constructor(private apiService: ApiService, public datepipe: DatePipe) { }

  
  ngOnInit(): void {
    // Set the starting (end) date to today
    this.endDate = new Date(); // This sets the end date to today

    // Set the start date to a week away from now
    const weekFromNow = new Date();
    weekFromNow.setDate(weekFromNow.getDate() - 7);
    this.startDate = weekFromNow;

    this.updatePlots();
  }

  formatDateStrings() {
    this.startDateFormatted = this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
    this.endDateFormatted = this.datepipe.transform(this.endDate, 'yyyy-MM-dd');
  }

  async updatePlots() {
    this.formatDateStrings();
    console.log(this.startDateFormatted, this.endDateFormatted)
    try {
      const response = await firstValueFrom(this.apiService.getOverallData(this.startDateFormatted, this.endDateFormatted) ?? of([]));
  
      if (response) {
        console.log("data from backend", response);
        this.dateChanged.emit(response);
      }
    } catch (error) {
      // Handle any errors that might occur during the API call or data processing
      console.error('Error updating plots:', error);
    }
  }

  onDateChange() {
    if (this.startDate && this.endDate) {
     this.updatePlots();
    }
  }
  
}
