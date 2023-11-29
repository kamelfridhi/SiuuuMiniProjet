import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { Bloc } from 'src/app/_Models/bloc';
import { BlocService } from 'src/app/_Services/bloc.service';

@Component({
  selector: 'app-afficher-blocs',
  templateUrl: './afficher-blocs.component.html',
  styleUrls: ['./afficher-blocs.component.css']
})
export class AfficherBlocsComponent implements OnInit {
  /* Declaration */
  blocs!: Bloc[];
  blocForm!: FormGroup;
  blocForm2!: FormGroup;
  nomBloc!: string;
  capaciteBloc!: number;
  UPDnomBloc!: string;
  UPDcapaciteBloc!: number;
  UPDblocId!: number;
  selectedBloc!: Bloc;
  /* Declaration end */
  constructor(private blocService: BlocService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getBlocs();
    this.blocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: [null, Validators.required]
    });
    this.blocForm2 = this.fb.group({
      UPDnomBloc: ['', Validators.required],
      UPDcapaciteBloc: [null, Validators.required],
      UPDblocId: [null, Validators.required]
    });
    
    this.initForm();
    console.log(this.blocs);
  }

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

  deleteBloc(event: Event, id: number): void {
    event.preventDefault();
    this.blocService.deleteBlocById(id).subscribe({
      next: () => {
        console.log('Bloc deleted successfully');
        this.blocs = this.blocs.filter(bloc => bloc.blocId !== id);
      },
      error: (error) => {
        console.error('Error deleting bloc:', error);
      }
    });
  }

  addBloc(): void {
      const newBloc: Bloc = {
        nomBloc: this.nomBloc,
        capaciteBloc: this.capaciteBloc,
        blocId: 0
      };
      this.blocService.addBloc(newBloc).subscribe({
        next: (addedBloc: Bloc) => {
          console.log('Bloc added successfully:', addedBloc);
          this.getBlocs();
          this.blocForm.reset();
        },
        error: (error) => {
          console.error('Error adding bloc:', error);
        }
      });
  }
  
  updateBloc(): void {
    // Access form controls and extract values
    const nomBlocValue = this.blocForm2.get('UPDnomBloc')?.value;
    const capaciteBlocValue = this.blocForm2.get('UPDcapaciteBloc')?.value;
    const idBlocValue = this.blocForm2.get('UPDblocId')?.value;
  
    // Create a Bloc object with the extracted values
    const updatedBloc: Bloc = {
      nomBloc: nomBlocValue,
      capaciteBloc: capaciteBlocValue,
      blocId: idBlocValue
    };
  
    // Call the service to update the block
    this.blocService.updateBloc(updatedBloc).subscribe({
      next: (response: Bloc) => {
        console.log('Bloc updated successfully:', response);
        this.getBlocs();
        this.blocForm2.reset(); // Reset the form
      },
      error: (error) => {
        console.error('Error updating bloc:', error);
      }
    });
  }
  
  

  private initForm(): void {
    this.blocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: [null, Validators.required],
      // Add other form controls as needed based on your Bloc model
    });
     this.blocForm2 = this.fb.group({
      UPDnomBloc: ['', Validators.required],
      UPDcapaciteBloc: [null, Validators.required],
      UPDblocId: [null, Validators.required]  
      // Add other form controls as needed based on your Bloc model
    });
  }


  editBloc(event: Event, bloc: Bloc): void {
    event.preventDefault();
    console.log('Editing bloc:', bloc);
  
      this.blocForm2.setValue({
        UPDnomBloc: bloc.nomBloc,
        UPDcapaciteBloc: bloc.capaciteBloc,
        UPDblocId:bloc.blocId
      });
      this.selectedBloc = bloc;
  } 
  
  

}
