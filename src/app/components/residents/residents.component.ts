import { Component, OnInit } from '@angular/core';
import { ResidentsService } from './services/residents.service';
import { Residents } from './services/residents.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  residents: Residents[] = [];

  constructor(private residentsService: ResidentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.residentsService.GetResidentsByApartmentId(id).subscribe(
      residents => {
        this.residents = residents;
      }
    );
  }
}
