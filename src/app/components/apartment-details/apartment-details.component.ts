import { Component,OnInit } from '@angular/core';
import { Apartments } from '../apartments/services/apartments.model';
import { ActivatedRoute } from '@angular/router';
import { ApartmentsService } from '../apartments/services/apartments.service';


@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  apartment!: Apartments;

  constructor(
    private route: ActivatedRoute,
    private apartmentsService: ApartmentsService,
  ) { }

  ngOnInit(): void {
    this.getApartmentById();
  }

  getApartmentById() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apartmentsService.getApartmentById(id).subscribe(
      apartment => {
        this.apartment = apartment;
      }
    );
  }
}
