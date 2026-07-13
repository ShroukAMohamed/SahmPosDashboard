import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/app-shell/app-shell.component').then(c => c.AppShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'live-orders'
      },
      {
        path: 'live-orders',
        loadComponent: () => import('./features/live-orders/pages/live-orders-page/live-orders-page.component').then(c => c.LiveOrdersPageComponent)
      },
      {
        path: 'kitchen-monitor',
        loadComponent: () => import('./features/kitchen-monitor/pages/kitchen-monitor-page/kitchen-monitor-page.component').then(c => c.KitchenMonitorPageComponent)
      },
      {
        path: 'new-order',
        loadComponent: () => import('./features/new-order/pages/new-order-page/new-order-page.component').then(c => c.NewOrderPageComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
