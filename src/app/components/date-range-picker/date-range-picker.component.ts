import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import  {MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css'],
  // imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
})

export class DateRangePickerComponent {
  startDate: Date | null = new Date();
  endDate: Date | null = new Date();

  constructor(private apiService: ApiService, public datepipe: DatePipe) { }

  onDateChange() {

    console.log(this.startDate, this.endDate)
    if (this.startDate && this.endDate) {
      console.log(this.startDate, this.endDate);
      let startDateString = this.datepipe.transform(this.startDate, 'yyyy-MM-dd');
      let endDateString = this.datepipe.transform(this.endDate, 'yyyy-MM-dd');
      console.log(startDateString, endDateString);
      let response = this.apiService.getOverallData(startDateString, endDateString);
      if (response)
        response.subscribe(data => {
          // Handle the fetched data
          console.log(data);
        });
    }
  }
}
