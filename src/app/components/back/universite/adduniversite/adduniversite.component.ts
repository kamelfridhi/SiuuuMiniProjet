import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../../../_Services/universite.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Universite} from "../../../../_Models/universite";

@Component({
  selector: 'app-adduniversite',
  templateUrl: './adduniversite.component.html',
  styleUrls: ['./adduniversite.component.css']
})
export class AdduniversiteComponent implements OnInit{
  universties!: Universite[];
  nomuniversite!: string;
  adress!: string;
  uvform!: FormGroup;
  uvformup!: FormGroup;
  UPDnomuv!: string;
  UPDadd!: string;
  UPDuvid!:number;
selectedBloc!:Universite;

  constructor(private univservice: UniversiteService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getuniversities();
    this.uvform = this.fb.group({
      nomUv: ['', Validators.required],
      adressUv: [null, Validators.required]
    });
    this.uvformup = this.fb.group({
      UPDnomuv: ['', Validators.required],
      UPDadd: ['', Validators.required],
      UPDuvid: [null, Validators.required]
    });

    }


  getuniversities(): void {
    console.log("eee");


    this.univservice.getAllUniversites().subscribe(value =>this.universties= value)

  }


    deleteuniversite(event: Event, id: number): void {
      event.preventDefault();
      this.univservice.deleteUniversiteById(id).subscribe({
        next: () => {
          console.log('universite deleted successfully');
          this.universties = this.universties.filter(u => u.idUniversite !== id);
        },
        error: (error) => {
          console.error('Error deleting bloc:', error);
        }
      });
    }

    addUniversite(): void {
      const newuv: Universite = {
      nomUniversite: this.nomuniversite,
      adresse: this.adress,
      idUniversite: 0
    };
    this.univservice.addUniversite(newuv).subscribe({
      next: (adduv: Universite) => {
        console.log('Universite added successfully:', adduv);
        this.getuniversities();
          this.uvform.reset();
      },
      error: (error) => {
        console.error('Error adding Universite:', error);
      }
    });
  }


  /*updateBloc(): void {
    const nomUniversiteValue = this.uvformup.value.UPDnomuv;
    const adresseValue = this.uvformup.value.UPDadd;
    const idUniversiteValue = this.uvformup.value.UPDuvid;

    const updatedUniversite: Universite = {
      nomUniversite: nomUniversiteValue,
      adresse: adresseValue,
      idUniversite: idUniversiteValue
    };

    console.log('updatedBloc:', updatedUniversite);

    this.univservice.updateUniversite(updatedUniversite).subscribe({
      next: (response: Universite) => {
        console.log('Bloc updated successfully:', response);
        // Don't reset the form to preserve updated values
        // this.uvformup.reset();
        this.getuniversities();
      },
      error: (error) => {
        console.error('Error updating bloc:', error);
        // Display an error message to the user
        alert('An error occurred while updating the bloc.');
      }
    });
  }




  private initForm(): void {
    this.uvform = this.fb.group({
      nomUv: ['', Validators.required],
      adressUv: [null, Validators.required]
    });
    this.uvformup = this.fb.group({
      UPDnomuv: ['', Validators.required],
      UPDadd: ['', Validators.required],
      UPDuvid: [null, Validators.required]
    });
    }
*/

    editBloc(event: Event, bloc: Universite): void {
      event.preventDefault();
      console.log('Editing bloc:', bloc);

      this.uvformup.setValue({
        UPDnomuv: bloc.nomUniversite,
        UPDadd: bloc.adresse,
        UPDuvid:bloc.idUniversite
      });
      this.selectedBloc = bloc;
    }


}
