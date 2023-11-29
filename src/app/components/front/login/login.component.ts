import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {EtudiantService} from "../../../_Services/etudiant.service";
import {Etudiant} from "../../../_Models/etudiant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private signUpButton: HTMLElement | null;
  private signInButton: HTMLElement | null;
  private container: HTMLElement | null;

  constructor(private elementRef: ElementRef, private etudiantService: EtudiantService,private r:Router) {
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
etat!:Boolean;
  addEtudiant(formUser: NgForm) {
    this.etudiantService.addetudiant(formUser.value).subscribe({
      next: (data) => {this.etat=true;
        console.log(this.etat);
        this.r.navigate(['/home']);

      },
      error: (err) => {
        console.log(err);
        this.etat=false;
        console.log(this.etat);
      }
    })

  }






  Loginetudiant(Loginuser: NgForm) {

  }


























}
