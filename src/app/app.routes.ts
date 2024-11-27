import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo.page').then(m => m.TodoPage)
  },
  {
    path: 'interactive-map',
    loadComponent: () => import('./interactive-map/interactive-map.page').then(m => m.InteractiveMapPage)
  },
  {
    path: 'stopwatch',
    loadComponent: () => import('./stopwatch/stopwatch.page').then(m => m.StopwatchPage)
  },
  {
    path: 'incremental-counter',
    loadComponent: () => import('./incremental-counter/incremental-counter.page').then( m => m.IncrementalCounterPage)
  },
];