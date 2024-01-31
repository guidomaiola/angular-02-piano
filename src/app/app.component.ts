import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-02-piano';

  aplicarSonido(note: number) : void {
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + note + '.wav';
    audio.load();
    audio.play();
  }
}
