import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveCompService {

  @Output() change: EventEmitter<any> = new EventEmitter();

  sendData(data: any): any {
    this.change.emit(null);
  }

  getData(): any {
      this.sendData(null);
  }

}