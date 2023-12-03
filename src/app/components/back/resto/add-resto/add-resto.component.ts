import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FoyerService} from "../../../../_Services/foyer.service";
import {Router} from "@angular/router";
import {Resto} from "../../../../_Models/resto/resto";
import {RestoService} from "../../../../_Services/resto/resto.service";
import {Foyer} from "../../../../_Models/foyer/foyer";


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  addRestoForm!:FormGroup;
  allFoyers:Foyer[]=[];
  selectedFoyers:Foyer[]=[];
  selectedIdFoyers:number[]=[];


  ngOnInit(): void {
    this.loadFoyers();

/*
    this.getRestoValue?.valueChanges.subscribe((selectedId: number) => {
      this.idResto = selectedId; // Update the idResto property with the selected ID
    });
*/
  }

  constructor(private fb: FormBuilder, private foyerService: FoyerService,private restoService:RestoService,private router: Router) {

    let formControls = {
      nomResto: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
      ]),
      descriptionResto: new FormControl('', Validators.required),
      telResto: new FormControl('', Validators.required),
      /*
      blocs: new FormArray([new FormControl('')]),
      u: new FormControl('')
*/
    }

    this.addRestoForm = this.fb.group(formControls);

  }
  get getNomResto() { return this.addRestoForm.get('nomResto'); }
  get getDescriptionResto() { return this.addRestoForm.get('descriptionResto'); }
  get getTelResto() { return this.addRestoForm.get('telResto'); }


  addResto() {
      this.restoService.ajouterRestoEtAffecterAplusiersFoyer(this.addRestoForm.value,this.selectedIdFoyers)
          .subscribe({
              next: (res) => {
                  this.router.navigate(['/back/restaurant/table']);
              },
              error: (err) => {
                  alert("Erreur lors de l'ajout du foyer");
              }
          });

  }
/*
  loadResto() {
    this.restoService.getAllResto().subscribe(data =>this.allResto=data );
  }
*/
  loadFoyers() {
    this.foyerService.getAllFoyer().subscribe(data =>this.allFoyers=data );
  }

  toggleSelection(foyer: Foyer): void {
    const index = this.selectedIdFoyers.indexOf(foyer.idFoyer);
    if (index !== -1) {
      this.selectedIdFoyers.splice(index, 1);
    } else {
      this.selectedIdFoyers.push(foyer.idFoyer);
    }
  }


}
