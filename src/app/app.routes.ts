import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculator',
    loadComponent: () =>
      import('./dijkstra-calculator/dijkstra-calculator')
      .then(m => m.DijkstraCalculatorComponent)
  }
];
