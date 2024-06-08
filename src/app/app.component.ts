import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  route = inject(Router);

  goCalculadora() {
    this.route.navigateByUrl('/calculadora');
  }

  goColores() {
    this.route.navigateByUrl('/colores');
  }
}
