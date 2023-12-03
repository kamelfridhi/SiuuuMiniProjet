import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FoyerService} from "../../../../_Services/foyer.service";
import {Router} from "@angular/router";
import {Resto} from "../../../../_Models/resto/resto";
import {RestoService} from "../../../../_Services/resto/resto.service";


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})
export class AddFoyerComponent implements OnInit {

  addFoyerForm!:FormGroup;
  allResto:Resto[]=[];
  idResto!:number ;

  ngOnInit(): void {
    this.loadResto();

    this.getRestoValue?.valueChanges.subscribe((selectedId: number) => {
      console.log(selectedId);
      this.idResto = selectedId; // Update the idResto property with the selected ID
    });

  }

  constructor(private fb: FormBuilder, private foyerService: FoyerService,private restoService:RestoService,private router: Router) {

    let formControls = {
      nomFoyer: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
      ]),
      capaciteFoyer: new FormControl('', Validators.required),
      resto: new FormControl(null, Validators.required),
      /*
      blocs: new FormArray([new FormControl('')]),
      u: new FormControl('')
*/
    }

    this.addFoyerForm = this.fb.group(formControls);
    console.log(this.addFoyerForm);

  }
  get nomFoyer() { return this.addFoyerForm.get('nomFoyer'); }
  get capaciteFoyer() { return this.addFoyerForm.get('capaciteFoyer'); }
  get getRestoValue() { return this.addFoyerForm.get('resto'); }


  addFoyer() {
      this.foyerService.ajouterFoyerEtAffecterAResto(this.addFoyerForm.value,this.idResto)
          .subscribe({
              next: (res) => {
                  this.router.navigate(['/back/foyer/table']);
              },
              error: (err) => {
                  alert("Erreur lors de l'ajout du foyer");
              }
          });

  }
  loadResto() {
    this.restoService.getAllResto().subscribe(data =>this.allResto=data );
  }


}
