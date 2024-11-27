import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'todo',
        loadComponent: () =>
          import('../todo/todo.page').then((m) => m.TodoPage),
      },
      {
        path: 'interactive-map',
        loadComponent: () =>
          import('../interactive-map/interactive-map.page').then((m) => m.InteractiveMapPage),
      },
      {
        path: 'stopwatch',
        loadComponent: () =>
          import('../stopwatch/stopwatch.page').then((m) => m.StopwatchPage),
      },
      {
        path: 'incremental-counter',
        loadComponent: () =>
          import('../incremental-counter/incremental-counter.page').then((m) => m.IncrementalCounterPage),
      },
      {
        path: '',
        redirectTo: '/tabs/todo',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/todo',
    pathMatch: 'full',
  },
];