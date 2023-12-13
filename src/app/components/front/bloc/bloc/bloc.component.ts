import { Component, OnInit } from '@angular/core';
import { Bloc } from 'src/app/_Models/bloc/bloc';
import { BlocService } from 'src/app/_Services/bloc/bloc.service';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.css']
})
export class BlocComponent implements OnInit {
  
  blocs!: Bloc[];

  ngOnInit(): void {
    this.getBlocs();
  }
  constructor(private blocService: BlocService) { }
  
  getBlocs(): void {
    this.blocService.getAllBlocs().subscribe({
      next: (blocs: Bloc[]) => {
        this.blocs = blocs;
        console.log(this.blocs);
      },
      error: (error) => {
        console.error('Error fetching blocs:', error);
      }
    });
  }

}
