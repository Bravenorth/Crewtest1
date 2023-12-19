import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fleetshiplist',
  templateUrl: './fleetshiplist.component.html',
  styleUrls: ['./fleetshiplist.component.scss']
})
export class FleetshiplistComponent implements OnInit {
  ships: any[] = [];
  searchTerm: string = '';
  filteredShips: any[] = [];
  selectedShip: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/fleet-ships.json').subscribe((data: any) => {
      this.ships = data.ships;
      this.filteredShips = this.ships;
    });
  }

  filterShips() {
    this.filteredShips = this.ships.filter(ship =>
      ship.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
