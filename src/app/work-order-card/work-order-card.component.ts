import { Component, Input } from '@angular/core';
import { WorkOrder } from '../app.component';

@Component({
  selector: 'app-work-order-card',
  templateUrl: './work-order-card.component.html',
  styleUrls: ['./work-order-card.component.css'],
})
export class WorkOrderCardComponent {
  @Input() order!: [WorkOrder, any];

  formatDate(timestamp: number) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }
}
