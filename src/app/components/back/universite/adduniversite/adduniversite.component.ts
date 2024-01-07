import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {UniversiteService} from "../../../../_Services/universite.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Universite} from "../../../../_Models/universite";
import {ActivatedRoute, Router} from "@angular/router";
import {Foyer} from "../../../../_Models/foyer/foyer";

@Component({
  selector: 'app-adduniversite',
  templateUrl: './adduniversite.component.html',
  styleUrls: ['./adduniversite.component.css']
})
export class AdduniversiteComponent implements OnInit{
  universties!: Universite[];
  uv!: Universite;
  foyer!: Foyer[];
  uvform!: FormGroup;
  uvformup!: FormGroup;
  idFoyer!:number;
  nomUniv!:string;
  selectedBloc!:Universite;
  successMessage: string | null = null;

  constructor(private univservice: UniversiteService, private fb: FormBuilder,private router:Router) {
    let formControls = {
      nomUniversite: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
      ]),
      adresse: new FormControl('', Validators.required),

    }
    this.uvform = this.fb.group(formControls);

  }
  get nomuniversite() { return this.uvform.get('nomUniversite'); }
  get adresse() { return this.uvform.get('adresse'); }

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
        console.log("eeeeee"+u.foyer.nomFoyer); // Log the foyer property for each Universite
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
  addUniversitee() {

    this.univservice.addUniversite(this.uvform.value).subscribe({
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
  desaffectfoyer(idf:number,u:number) {

    this.univservice.disaffecFoyerAUniversite(idf,u).subscribe({
      next:(response) => {

        this.router.navigate(['/back/adduniversite'])
      },
      error:(error) => {
        console.error('Erreur lors de la modification de la universite', error);
      }
    });


  }
  refreshPage(): void {
    window.location.reload();
  }

}
