import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import {IMakes} from '../Ivehicle';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  providers : [VehicleService]
})
export class MakeComponent implements OnInit {
  
  public butDisabled:boolean = false;

  vehicleMakes: IMakes;
  constructor (private  _vehicleService: VehicleService) {}
  ngOnInit() {
      this._vehicleService.getMakes()
          .subscribe((data)=> this.vehicleMakes = data);
         
  }
}
    
