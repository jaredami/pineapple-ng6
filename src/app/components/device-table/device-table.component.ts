import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device/device.service';
import { Device, Label } from '../../services/device/device.model';


@Component({
  selector: 'device-table',
  templateUrl: './device-table.html',
  styleUrls: ['./device-table.css']
})

export class DeviceTableComponent implements OnInit {
  title = 'pineapple6';

  headers: Label[];
  rows: string[][];

  constructor(
    public deviceService: DeviceService
  ) {}

  ngOnInit() {
    this.deviceService.getDevices()
      .subscribe((data: Device) => { 
        this.headers = data.headers;
        this.rows = data.rows;
      });
  }
}
