import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FoyerService} from "../../../../_Services/foyer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})
export class AddFoyerComponent {

  addFoyerForm!:FormGroup;
  constructor(private fb: FormBuilder, private foyerService: FoyerService, private router: Router) {
    let formControls = {
      nomFoyer: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
      ]),
      capaciteFoyer: new FormControl('', Validators.required),
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


  addFoyer() {
      this.foyerService.addFoyer(this.addFoyerForm.value)
          .subscribe({
              next: (res) => {
                  this.router.navigate(['/back/foyer/table']);
              },
              error: (err) => {
                  alert("Erreur lors de l'ajout du foyer");
              }
          });

  }
}
