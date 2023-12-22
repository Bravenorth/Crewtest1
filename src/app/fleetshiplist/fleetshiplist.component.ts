import { Component, OnInit } from '@angular/core';
import { Shiplist } from '../models/shiplist.model';
import { ShiplistService } from '../services/shiplist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fleetshiplist',
  templateUrl: './fleetshiplist.component.html',
  styleUrls: ['./fleetshiplist.component.scss']
})
export class FleetshiplistComponent implements OnInit {
  Shiplist!: Observable<Shiplist[]>;

  constructor(private ShiplistService: ShiplistService) { }

  ngOnInit(): void {
    this.Shiplist= this.ShiplistService.getShiplist();
  }
}
