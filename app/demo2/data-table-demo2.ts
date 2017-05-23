import { Component, ViewChild } from '@angular/core';

import { DataTable } from '../../node_modules/ng2-datatable-bootstrap4/dist/src/components/table.component';
import { DataTableResource } from '../../node_modules/ng2-datatable-bootstrap4/dist/src/tools/data-table-resource';

import { cars } from './data-table-demo2-data';

@Component({
  selector: 'data-table-demo-2',
  templateUrl: 'app/demo2/data-table-demo2.html'
})
export class DataTableDemo2 {

    carResource = new DataTableResource(cars);
    cars = [];
    carCount = 0;

    @ViewChild(DataTable) carsTable: DataTable;

    constructor() {
        this.rowColors = this.rowColors.bind(this);

        this.carResource.count().then(count => this.carCount = count);
    }

    reloadCars(params) {
        this.carResource.query(params).then(cars => this.cars = cars);
    }

    // custom features:

    carClicked(car) {
        alert(car.model);
    }

    yearLimit = 1999;

    rowColors(car) {
        if (car.year >= this.yearLimit) return 'rgb(255, 255, 197)';
    }
}
