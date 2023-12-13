import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bloc } from 'src/app/_Models/bloc/bloc';
import { BlocService } from 'src/app/_Services/bloc/bloc.service';

@Component({
  selector: 'app-detailbloc',
  templateUrl: './detailbloc.component.html',
  styleUrls: ['./detailbloc.component.css']
})
export class DetailblocComponent implements OnInit {
  constructor(private blocService: BlocService) {}

  @Input() nomBlocCheck!: string;
  @Output() detailsEmitter = new EventEmitter<string>();

  checkIfBlocExists() {
    this.blocService.getBlocbyName(this.nomBlocCheck).subscribe({
      next: (bloc: Bloc | null) => {
        if (bloc !== null) {
          console.log('Bloc exists:', bloc);
          this.detailsEmitter.emit(`Bloc "${this.nomBlocCheck}" exists.`);
        } else {
          console.log(`Bloc "${this.nomBlocCheck}" does not exist.`);
          this.detailsEmitter.emit(`Bloc "${this.nomBlocCheck}" does not exist.`);
        }
      },
      error: (error) => {
        console.error('Error checking bloc:', error);
        this.detailsEmitter.emit('An error occurred while checking bloc.');
      }
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic
  }
}
