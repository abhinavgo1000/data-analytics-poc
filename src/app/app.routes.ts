import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: 'home', 
        loadComponent: () =>
            import('./components/home-page/home-page.component')
                .then(m => m.HomePageComponent),
        providers: []
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'bar-chart',
        loadComponent: () =>
            import('./components/bar-chart-page/bar-chart-page.component')
                .then(m => m.BarChartPageComponent)
    },
    {
        path: 'line-chart',
        loadComponent: () =>
            import('./components/line-chart-page/line-chart-page.component')
                .then(m => m.LineChartPageComponent)
    },
    {
        path: 'pie-chart',
        loadComponent: () =>
            import('./components/pie-chart-page/pie-chart-page.component')
                .then(m => m.PieChartPageComponent)
    },
    {
        path: 'data-entry',
        loadComponent: () =>
            import('./components/data-entry-page/data-entry-page.component')
                .then(m => m.DataEntryPageComponent)
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
