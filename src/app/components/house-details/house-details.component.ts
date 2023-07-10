import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../houses/services/houses.service';
import { Houses } from '../houses/services/houses.model';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit{

  house!: Houses;

  constructor(
    private route: ActivatedRoute,
    private housesService: HousesService,
  ) { }

  ngOnInit() {
    this.getHouseDetails();
  }

  getHouseDetails() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.housesService.getHouseById(id).subscribe(
      house => {
        this.house = house;
      }
    );
  }

}
