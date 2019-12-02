import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormationAngularFNRS201912';

  delayMs = 2000;

  couleurs = ['Rouge', 'Vert', 'Bleu']
  couleurSelected = 'Bleu';
}
