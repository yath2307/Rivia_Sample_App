import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeOrderServiceService {

  constructor() { }

  private type = new Subject<any>();

    publishSomeData(data: any) {
        this.type.next(data);
    }

    getObservable(): Subject<any> {
        return this.type;
    }
}
