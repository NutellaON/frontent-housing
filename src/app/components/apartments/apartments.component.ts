import { Component, OnInit  } from '@angular/core';
import { Apartments } from './services/apartments.model';
import { ActivatedRoute } from '@angular/router';
import { ApartmentsService } from './services/apartments.service';


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit{
  apartments: Apartments[]=[];

  constructor(
    private apartmentsService: ApartmentsService,
    private route: ActivatedRoute,
    ){}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apartmentsService.GetApartmentsById(id).subscribe(
      (apartments: Apartments[]) => {
        this.apartments = apartments;
      }
    );
  }
}
