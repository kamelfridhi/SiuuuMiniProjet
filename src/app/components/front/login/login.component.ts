import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {EtudiantService} from "../../../_Services/etudiant.service";
import {Router} from "@angular/router";
import {EtudiantConnecteService} from "../../../_Services/etudiant-connecte.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  etat!: Boolean;
  private signUpButton: HTMLElement | null;
  private signInButton: HTMLElement | null;
  private container: HTMLElement | null;
  email!: string;

  constructor(private elementRef: ElementRef, private etudiantService: EtudiantService, private r: Router, private etudiantConnecte: EtudiantConnecteService) {
    this.signUpButton = null;
    this.signInButton = null;
    this.container = null;
  }

  ngOnInit(): void {
    this.signUpButton = this.elementRef.nativeElement.querySelector('#signUp');
    this.signInButton = this.elementRef.nativeElement.querySelector('#signIn');
    this.container = this.elementRef.nativeElement.querySelector('#container');

    if (this.signUpButton && this.signInButton && this.container) {
      this.signUpButton.addEventListener('click', () => {
        // @ts-ignore
        this.container.classList.add('right-panel-active');
      });

      this.signInButton.addEventListener('click', () => {
        // @ts-ignore
        this.container.classList.remove('right-panel-active');
      });
    }


  }

  addEtudiant(formUser: NgForm) {
    this.etudiantConnecte.clearData();
    this.etudiantService.addetudiant(formUser.value).subscribe(data => {
      this.etudiantConnecte.saveData('id', data.idEtudiant.toString())
      this.etudiantConnecte.saveData('role', data.role);
      console.log(this.etudiantConnecte.getData('role'))
      this.r.navigate(['/Home']);
    })


  }


  Loginetudiant(Loginuser: NgForm) {
    this.etudiantConnecte.clearData();
    this.etudiantService.loginEtudiant(Loginuser.value).subscribe({
      next: (data) => {
        if (data != null) {
          this.etudiantConnecte.saveData('role', data.role);

          this.etudiantConnecte.saveData('id', data.idEtudiant.toString());
          if (data.role == 'user') {
            this.r.navigate(['/home']);
          }
          else{
            this.r.navigate(['/back']);
          }


        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
