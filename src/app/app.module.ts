import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule} from 'ng2-charts'
import { FormsModule } from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { DatePipe } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotBarplotComponent } from './components/plot-barplot/plot-barplot.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { FappHeaderComponent } from './components/fapp-header/fapp-header.component';
import { FappFooterComponent } from './components/fapp-footer/fapp-footer.component';
import { PlotLineplotComponent } from './components/plot-lineplot/plot-lineplot.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotBarplotComponent,
    DateRangePickerComponent,
    FappHeaderComponent,
    FappFooterComponent,
    PlotLineplotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgChartsModule,
    FormsModule,
    MatInputModule, 
    NgFor
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
