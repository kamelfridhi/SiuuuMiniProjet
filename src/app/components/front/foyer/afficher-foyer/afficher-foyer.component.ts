import {Component, OnInit} from '@angular/core';
import {Foyer} from "../../../../_Models/foyer/foyer";
import {FoyerService} from "../../../../_Services/foyer.service";
import {SharedService} from "../../../../_Services/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-afficher-foyer',
  templateUrl: './afficher-foyer.component.html',
  styleUrls: ['./afficher-foyer.component.css']
})
export class AfficherFoyerComponent implements OnInit{

  foyers: Foyer[] = [];
  currentPage = 0;
  elementPerPage=3;

  totalElements!:number;
  totalPages!:number;

  constructor(private foyerService: FoyerService,private router: Router) { }

  ngOnInit(): void {
    this.loadFoyers();
    console.log("nb foyers : "+this.totalElements)
  }



  loadFoyers(): void {
      this.foyerService.getAllFoyerWP(this.currentPage, this.elementPerPage).subscribe(response => {
      this.foyers = response.content;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadFoyers();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadFoyers();
    }
  }

  goToDetailsPage(id: number) {
      this.router.navigate(['/details/'+id]);
  }

}
