import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import {IYears} from '../Ivehicle';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  providers : [VehicleService]
})
export class YearComponent implements OnInit {

  vehicleYears: IYears

  constructor (private  _vehicleService: VehicleService) {}

  ngOnInit() {
      this._vehicleService.getYears()
          .subscribe((data)=> this.vehicleYears = data);
  }

}
