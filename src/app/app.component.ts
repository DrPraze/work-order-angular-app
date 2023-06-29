import { Component } from '@angular/core';
import workersJson from '../assets/workers.json';
import ordersData from '../assets/workOrders.json';

export interface WorkOrder {
  id: string;
  workerId: number;
  deadline: number;
  name: string;
  description: string;
}

export interface Worker {
  id: number;
  name: string;
  companyName: string;
  email: string;
  image: string;
}

type WorkersData = {
  [key: string]: Worker;
};
const workersData = workersJson as WorkersData;

interface WorkersArray extends Array<Worker> {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly workOrders: [WorkOrder, Worker][];
  sortDate: boolean = false;
  search: string = '';

  constructor() {
    let workersArray: WorkersArray = [];
    for (let id = 0; id < 5; id++) {
      workersArray = [...workersArray, workersData[id]];
    }
    this.workOrders = ordersData.orders.map((order: WorkOrder) => [
      order,
      workersArray[order.workerId],
    ]);
  }

  toggle() {
    this.sortDate = !this.sortDate;
  }
}
