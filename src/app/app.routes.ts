import { Routes } from '@angular/router';
import { dataResolver } from './data.resolver';

export const routes: Routes = [
    {
        path: 'child',
        loadComponent: () => import('./child/child.component').then(m => m.ChildComponent),
        resolve: {
            resolvedData: dataResolver
        }
    }
];
