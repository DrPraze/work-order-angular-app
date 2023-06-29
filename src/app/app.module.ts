import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { WorkOrderCardComponent } from './work-order-card/work-order-card.component';
import { FilterByWorkerNamePipe } from './filter-by-worker-name.pipe';
import { OrderByDeadlinePipe } from './order-by-deadline.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WorkOrderCardComponent,
    FilterByWorkerNamePipe,
    OrderByDeadlinePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
