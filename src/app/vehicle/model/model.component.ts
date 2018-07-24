import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import {IModels} from '../Ivehicle';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  providers : [VehicleService]
})
export class ModelComponent implements OnInit {

    vehicleModels: IModels
    constructor (private  _vehicleService: VehicleService) {}
    ngOnInit() {
        this._vehicleService.getModels()
            .subscribe((data)=> this.vehicleModels = data);
    }

}
