import { Routes } from '@angular/router';
import { AuthLayout } from '@shared/layouts/auth-layout/auth-layout';
import { DashboardLayout } from '@shared/layouts/dashboard-layout/dashboard-layout';
import { PublicLayout } from '@shared/layouts/public-layout/public-layout';

export const routes: Routes = [
    // 1. ZONA PÚBLICA (SSG: Landing, Precios, Gacetas / Políticas)
    {
        path: '',
        component: PublicLayout,
        children: [
            {
                path: '',
                loadChildren: () =>
                import('./landing/landing.routes').then((m) => m.landingRoutes),
            },
            {
                path: 'policy',
                title: 'Bases Legales y Normativa SENIAT - SAJI',
                loadChildren: () => import('./policy/policy.routes').then(m => m.policyRoutes),
            },
            {
                path: 'soporte',
                title: 'Mesa de Ayuda - SAJI',
                loadChildren: () => import('./support/support.routes').then(m => m.supportRoutes),
            },
        ]
    },
    
    // 2. ACCESO Y SEGURIDAD (Sin Layout / Layout Centrado)
    {
        path: 'acceso',
        title: 'Acceso Corporativo - SAJI',
        // canMatch: [notAuthenticatedGuard],
        loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes),
    },

    // 3. PLATAFORMA PRIVADA ERP (SPA: Protegida bajo Login)
    {
        path: 'app',
        // canMatch: [authInitGuard, isAuthenticatedGuard],
        loadChildren: () => import('./dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
    },

    // 4. PÁGINA NO ENCONTRADA (Conserva la URL original en el navegador)
    {
        path: '**',
        title: 'Página no encontrada - SAJI',
        loadComponent: () => import('./shared/pages/not-found-page/not-found-page'),
    },
];
