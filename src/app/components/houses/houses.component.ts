import { Component, OnInit  } from '@angular/core';
import { Houses } from './services/houses.model';
import { HousesService } from './services/houses.service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit{
  houses: Houses[] = [];
  newHouse: Houses = {
    id: 0,
    numurs: null,
    iela: '',
    pilseta: '',
    valsts: '',
    pasta_indekss: '',
  };
  selectedHouse!: Houses;

  constructor(
    private housesService: HousesService,
    private router: Router,
    public auth: AuthService,
    private modalService: NgbModal) {}

  ngOnInit() {
    this.housesService.getHouses().subscribe(
      houses => {this.houses = houses;}
    );
  }

  openAddHouseModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-crate-house' });
  }

  openEditHouseModal(content: any, house:Houses){
    this.selectedHouse = house;
    this.modalService.open(content, { ariaLabelledBy: 'modal-edit-house' });
  }

  openDeleteHouseModal(content: any, house: Houses) {
    this.selectedHouse = house;
    this.modalService.open(content, { ariaLabelledBy: 'modal-delete-house' });
  }

  onSaveClick()
  {
    if (this.newHouse) {
      this.housesService.createHouse(this.newHouse).subscribe((createdHouse) => {
        this.houses.push(createdHouse);
        this.modalService.dismissAll();
        this.newHouse = {
          id: 0,
          numurs: null,
          iela: '',
          pilseta: '',
          valsts: '',
          pasta_indekss: '',
        };
      });
    }
  }

  editHouse()
  {
    if(this.selectedHouse)
    {
      this.housesService.editHouse(this.selectedHouse.id, this.selectedHouse).subscribe(() => {
        this.modalService.dismissAll();
      });
    }
  }

  deleteHouse()
  {
    if(this.selectedHouse)
    {
      this.housesService.deleteHouse(this.selectedHouse.id).subscribe(() => {
        this.houses = this.houses.filter(house => house.id !== this.selectedHouse?.id);
        this.modalService.dismissAll();
      });
    }
  }

}
