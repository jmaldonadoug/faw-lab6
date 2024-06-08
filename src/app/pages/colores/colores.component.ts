import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-colores',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.css'
})
export class ColoresComponent {
  form = new FormGroup({
    rojo: new FormControl(''),
    verde: new FormControl(''),
    azul: new FormControl('')
  });
  data: string[] = [];


  agregarColor() {
    const { rojo, verde, azul } = this.form.value;
    const color = `#${rojo}${verde}${azul}`;
    const data = this.data;

    data.push(color);
  }
}
