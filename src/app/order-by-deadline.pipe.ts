import { Pipe, PipeTransform } from '@angular/core';
import { WorkOrder } from './app.component';

@Pipe({
  name: 'orderByDeadline',
})
export class OrderByDeadlinePipe implements PipeTransform {
  transform(
    workOrders: [WorkOrder, any][],
    sortDate: boolean
  ): [WorkOrder, any][] {
    return workOrders.sort((a, b) =>
      sortDate ? b[0].deadline - a[0].deadline : a[0].deadline - b[0].deadline
    );
  }
}
