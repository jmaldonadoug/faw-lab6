import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  form = new FormGroup({
    num1: new FormControl(0),
    num2: new FormControl(0)
  });

  sumar() {
    const { num1, num2 } = this.form.value;
    const result = Number(num1) + Number(num2);

    alert(result);
  }
  restar() {
    const { num1, num2 } = this.form.value;
    const result = Number(num1) - Number(num2);

    alert(result);
  }
  multiplicar() {
    const { num1, num2 } = this.form.value;
    const result = Number(num1) * Number(num2);

    alert(result);
  }
  dividir() {
    const { num1, num2 } = this.form.value;
    const result = Number(num1) / Number(num2);

    alert(result);
  }
  potencia() {
    const { num1, num2 } = this.form.value;
    const result = Math.pow(Number(num1), Number(num2));

    alert(result);
  }
}
