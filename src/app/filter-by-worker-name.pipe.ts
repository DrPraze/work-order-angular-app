import { Pipe, PipeTransform } from '@angular/core';
import { Worker } from './app.component';

@Pipe({
  name: 'filterByWorkerName',
})
export class FilterByWorkerNamePipe implements PipeTransform {
  transform(workOrders: [any, Worker][], search: string): [any, Worker][] {
    if (!search) return workOrders;
    return workOrders.filter((workOrder) => workOrder[1].name.includes(search));
  }
}
