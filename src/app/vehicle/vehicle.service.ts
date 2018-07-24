import { Injectable, OnInit } from '@angular/core';
import { IMakes,IModels, IYears } from './Ivehicle';
import { Http, Response } from '@angular/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class VehicleService implements OnInit{

    constructor(private _http: Http) { }
    ngOnInit() {}

    getMakes(): Observable<IMakes>{
        return this._http.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
                .pipe(map(res => res.json()));
    }

    getModels(): Observable<IModels>{
        return this._http.get('https://parallelum.com.br/fipe/api/v1/carros/marcas/1/modelos')
                .pipe(map(res => res.json()));
    }

    getYears(): Observable<IYears>{
        return this._http.get('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos')
                .pipe(map(res => res.json()));
    }
}