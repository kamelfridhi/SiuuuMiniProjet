import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from 'src/app/_Models/bloc/bloc';
import { BlocService } from 'src/app/_Services/bloc/bloc.service';

@Component({
  selector: 'app-detailbloc',
  templateUrl: './detailbloc.component.html',
  styleUrls: ['./detailbloc.component.css']
})
export class DetailblocComponent implements OnInit{
  blocId!:string;
  blocDetails!: Bloc;
  constructor(private route: ActivatedRoute, private blocService: BlocService) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.blocId = params['blocId'];
      this.fetchBlocDetails();
    });
  }

  fetchBlocDetails() {
    this.blocService.getBlocDetails(this.blocId).subscribe((data) => {
      this.blocDetails = data; 
    });
  }
}
