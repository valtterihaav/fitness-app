import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule} from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotBarplotComponent } from './components/plot-barplot/plot-barplot.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { FappHeaderComponent } from './components/fapp-header/fapp-header.component';
import { FappFooterComponent } from './components/fapp-footer/fapp-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotBarplotComponent,
    DateRangePickerComponent,
    FappHeaderComponent,
    FappFooterComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
