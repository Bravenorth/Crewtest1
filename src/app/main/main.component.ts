import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  pseudos: string[] = [];
  pseudo: string = '';

  onSubmit() {
    if (this.pseudo.trim() !== '') {
      this.pseudos.push(this.pseudo);
      this.pseudo = ''; // Réinitialise le champ de saisie
    }
  }
}
