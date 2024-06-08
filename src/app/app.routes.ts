import { Routes } from '@angular/router';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { ColoresComponent } from './pages/colores/colores.component';

export const routes: Routes = [
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'colores', component: ColoresComponent }
];
