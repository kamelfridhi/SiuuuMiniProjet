import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EtudiantService} from "../../../../_Services/etudiant.service";
import {Etudiant} from "../../../../_Models/etudiant";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-updatelogin',
  templateUrl: './updatelogin.component.html',
  styleUrls: ['./updatelogin.component.css']
})


export class UpdateloginComponent implements OnInit {
  etudiant!: Etudiant;
  updateEtudiantForm!:FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private etudiantservice: EtudiantService,private fb: FormBuilder) {
    let formControls = {
      nomEt: new FormControl(this.etudiant?.nomEt, [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
      ]),
      prenomet: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
        ]),

      cin: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]*"),
        Validators.minLength(8)
        ]),

      ecole: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
        ]),

      dateNaissance: new FormControl('', [
        Validators.required
        ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}")
        ]),

      passoword: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]*"),
        Validators.minLength(8)
        ]),




    }


    this.updateEtudiantForm = this.fb.group(formControls);
    console.log(this.updateEtudiantForm);


  }
  get getnomEt() { return this.updateEtudiantForm.get('nomEt'); }
  get getprenomet() { return this.updateEtudiantForm.get('prenomet'); }
  get getcin() { return this.updateEtudiantForm.get('cin'); }
  get getecole() { return this.updateEtudiantForm.get('ecole'); }
  get getdateNaissance() { return this.updateEtudiantForm.get('dateNaissance'); }
  get getemail() { return this.updateEtudiantForm.get('email'); }
  get getpassoword() { return this.updateEtudiantForm.get('passoword'); }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.getEtudiant(params['id']);

    })
  }


  getEtudiant(id: number) {
    this.etudiantservice.getEtudiant(id.toString()).subscribe(data => {
      this.etudiant = data;

    })
  }

  updateEtudiant() {
    this.etudiantservice.updateEtudiant(this.etudiant).subscribe(data => {
      this.router.navigate(['/home'])
    })
  }






































}

