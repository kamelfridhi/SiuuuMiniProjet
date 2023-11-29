import {Component, ElementRef} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private signUpButton: HTMLElement | null;
  private signInButton: HTMLElement | null;
  private container: HTMLElement | null;

  constructor(private elementRef: ElementRef) {
    // Utilisez ElementRef pour accéder à l'élément natif du composant
    this.signUpButton = null;
    this.signInButton = null;
    this.container = null;
  }

  ngOnInit(): void {
    // Initialisation des références aux éléments HTML
    this.signUpButton = this.elementRef.nativeElement.querySelector('#signUp');
    this.signInButton = this.elementRef.nativeElement.querySelector('#signIn');
    this.container = this.elementRef.nativeElement.querySelector('#container');

    // Ajout des écouteurs d'événements
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
    
  }

  Loginetudiant(Loginuser: NgForm) {
    
  }
}
