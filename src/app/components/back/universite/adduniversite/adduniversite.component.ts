import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UniversiteService} from "../../../../_Services/universite.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Universite} from "../../../../_Models/universite";
import {Foyer} from "../../../../_Models/foyer";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-adduniversite',
  templateUrl: './adduniversite.component.html',
  styleUrls: ['./adduniversite.component.css']
})
export class AdduniversiteComponent implements OnInit{
  universties!: Universite[];
  foyer!: Foyer[];
  uvform!: FormGroup;
  uvformup!: FormGroup;
  idFoyer!:number;
  nomUniv!:string;
selectedBloc!:Universite;
  successMessage: string | null = null;

  constructor(private univservice: UniversiteService, private fb: FormBuilder,private router:Router) {
    let formControls = {
      nomUniversite: new FormControl(''),
      adresse: new FormControl(''),

    }
    this.uvform = this.fb.group(formControls);

  }
  ngOnInit(): void {
    this.univservice.getAllfoyer().subscribe(value=>this.foyer=value);
    this.getuniversities();
    this.getfoyerValue?.valueChanges.subscribe((selectedId: number) => {
      console.log(selectedId);
      this.idFoyer = selectedId; // Update the idResto property with the selected ID nomFoyer
    });

    this.getnomuv?.valueChanges.subscribe((nomUniv: string) => {
      console.log(nomUniv);
      this.nomUniv = nomUniv; // Update the idResto property with the selected ID
    });
    }


  getuniversities(): void {


    this.univservice.getAllUniversites().subscribe(value => {
      this.universties = value;
      this.universties.forEach(u => {
        console.log("eeeeee"+u.foyer); // Log the foyer property for each Universite
      });
    });


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

    addUniversit(): void {

    /*this.univservice.affecterFoyerAUniversite(this.foyer.idFoyer,newuv.nomUniversite).subscribe({
      next: (adduv: Universite) => {
        console.log('Universite added successfully:', adduv);
        this.getuniversities();
          this.uvform.reset();
      },
      error: (error) => {
        console.error('Error adding Universite:', error);
      }
    });*/
  }
  addUniversite() {

    this.univservice.affecterFoyerAUniversite(this.uvform.value).subscribe({
      next: () => {
        console.log('Universite added successfully:', );
        this.getuniversities();
       this.uvform.reset();

      },
      error: (error) => {
        console.error('Error adding Universite:', error);
      }
    });
    console.log('************************************************************ ')

  }
  @ViewChild('successModal') successModal: ElementRef | undefined;

  sharfacebook(nomuv:string,adress:string)
  {
    const imageUrl = 'https://media-mcetv.ouest-france.fr/wp-content/uploads/2021/10/etudiant-top-10-des-meilleures-universites-dans-le-monde-entier-1.jpg';
    const message: string = "New Universite: " + nomuv + "\nAddress: " + adress;
    // Concatenate $o with 'Hello fans!'
     console.log("hello");
    this.univservice.postMessageToFeed(message, imageUrl)
      .subscribe(
        response => {
          console.log('Message posted successfully:', response);
          // Handle success

          // Show the modal
          this.successMessage = 'Your post was published successfully!';

          // Automatically hide the message after 3 seconds (adjust as needed)
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);

        },
        error => {
          console.error('Error posting message to Facebook:', error);
          // Handle error
console.log("lossssssssssssssss");
        }
      );}
  get getfoyerValue() { return this.uvform.get('foyer'); }
  get getnomuv() { return this.uvform.get('nomUniversite'); }


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
  inputValue = '';
  locations: any[] = [];
  onInputChange() {
    this.univservice.autocomplete(this.inputValue).subscribe(data => {
      this.locations = data.map((item: { display_name: any; lat: any; lon: any; }) => ({
        label: item.display_name,
        value: item.display_name,
        lat: item.lat,
        lon: item.lon
      }));
    });
  }

  onSelectLocation(location: any) {
    this.inputValue = location.label;
    // Optionally, you can use location.lat and location.lon here
    this.locations = []; // Clear the suggestions
  }

}
