import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { Bloc } from 'src/app/_Models/bloc/bloc';
import { Chambre } from 'src/app/_Models/chambre/chambre';
import { Foyer } from 'src/app/_Models/foyer/foyer';
import { BlocService } from 'src/app/_Services/bloc/bloc.service';
import { FoyerService } from 'src/app/_Services/foyer/foyer.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ChambreService } from 'src/app/_Services/chambre/chambre.service';

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
  foyers:Foyer[]=[];
  affecterSelectedBloc!:string;
  affecterSelectedFoyer!:string;
  /* Declaration end */
  displayedColumns: string[] = ['select', 'idChambre'];


  dataSource = new MatTableDataSource<Chambre>([]);
  selection = new SelectionModel<Chambre>(true, []);
  constructor(private blocService: BlocService,private foyerService: FoyerService,private chamberService :ChambreService, private fb: FormBuilder) { }

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

    this.getFoyers();
    this.fetchChambresNonAffecter();
  }

  fetchChambresNonAffecter(): void {
    this.chamberService.getChambresNonAffecter().subscribe((chambres: Chambre[]) => {
      this.dataSource.data = chambres;
    });
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

  
  getFoyers(): void {
    this.foyerService.getAllFoyer().subscribe({
      next: (data: Foyer[]) => {
        this.foyers = data;
        console.log(this.foyers);
      },
      error: (error) => {
        console.error('Error fetching foyers:', error);
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
        blocId: 0,
        foyer: null
      };
      this.blocService.addBloc(newBloc).subscribe({
        next: (addedBloc: Bloc) => {
          console.log('Bloc added successfully:', addedBloc);
          this.getBlocs();
          this.blocForm.reset();
        },
        error: (error) => {
          console.error('Error adding bloc:', error);
          console.log('Error adding bloc:', newBloc);
        }
      });
  }
  

  updateBloc(): void {

    const nomBlocValue = this.blocForm2.value.UPDnomBloc;
    const capaciteBlocValue = this.blocForm2.value.UPDcapaciteBloc;
    const idBlocValue = this.blocForm2.value.UPDblocId; 
  
    console.log('nomBlocValue:', nomBlocValue);
    console.log('capaciteBlocValue:', capaciteBlocValue);
    console.log('idBlocValue:', idBlocValue);
  
    const updatedBloc: Bloc = {
      nomBloc: nomBlocValue,
      capaciteBloc: capaciteBlocValue,
      blocId: idBlocValue,
      foyer: null
    };
    console.log('updatedBloc:', updatedBloc);

    this.blocService.updateBloc(updatedBloc).subscribe({
      next: (response: Bloc) => {
        console.log('Bloc updated successfully:', response);
        this.getBlocs();
        this.blocForm2.reset(); 
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

    });
     this.blocForm2 = this.fb.group({
      UPDnomBloc: ['', Validators.required],
      UPDcapaciteBloc: [null, Validators.required],
      UPDblocId: [null, Validators.required]  

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
  
  

  affecter(event: Event): void {
    event.preventDefault();
    if (this.affecterSelectedBloc && this.affecterSelectedFoyer) {
      const selectedBlocNom: string = this.affecterSelectedBloc;
      const selectedFoyerNom: string = this.affecterSelectedFoyer;

      this.blocService.affecterBlocAFoyer(selectedBlocNom, selectedFoyerNom).subscribe({
        next: (updatedBloc: Bloc) => {
          console.log('Bloc affected successfully:', updatedBloc);
          // Add any additional logic here if needed
        },
        error: (error) => {
          console.error('Error affecting bloc:', error);
        },
      });
    } else {
      console.error('Please select both bloc and foyer.');
    }
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

}
