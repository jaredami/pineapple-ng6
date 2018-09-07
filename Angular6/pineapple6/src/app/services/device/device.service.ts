import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './device.model'

@Injectable({ providedIn: 'root' })
export class DeviceService {

  constructor(private http: HttpClient) {}

  getDevices() {
    return this.http.get<Device>('http://localhost:4200/assets/devices.json');
  }
}
