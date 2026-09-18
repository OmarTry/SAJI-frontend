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
                path: 'support',
                title: 'Mesa de Ayuda - SAJI',
                loadChildren: () => import('./support/support.routes').then(m => m.supportRoutes),
            },
        ]
    },
    
    // 2. ACCESO Y SEGURIDAD (Sin Layout / Layout Centrado)
    {
        path: 'auth',
        title: 'Acceso Corporativo - SAJI',
        component: AuthLayout,
        // canMatch: [notAuthenticatedGuard],
        loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes),
    },

    // 3. PLATAFORMA PRIVADA ERP (SPA: Protegida bajo Login)
    {
        path: 'app',
        component: DashboardLayout,
        // canMatch: [authInitGuard, isAuthenticatedGuard],
        children: [
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
        {
            path: 'dashboard',
            title: 'Panel Fiscal - SAJI',
            loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.dashboardRoutes),
        },
        {
            path: 'billing',
            title: 'Facturación y Libros Fiscales - SAJI',
            loadChildren: () => import('./billing/billing.routes').then(m => m.billingRoutes),
        },
        {
            path: 'accounting',
            title: 'Libro Mayor y Asientos - SAJI',
            loadChildren: () => import('./accounting/accounting.routes').then(m => m.accountingRoutes),
        },
        {
            path: 'tax-engine',
            title: 'Motor Tributario SENIAT - SAJI',
            loadChildren: () => import('./tax-engine/tax-engine.routes').then(m => m.taxEngineRoutes),
        },
        {
            path: 'company',
            title: 'Configuración de Empresa y RIF - SAJI',
            loadChildren: () => import('./company/company.routes').then(m => m.companyRoutes),
        },
        ],
    },

    // 4. PÁGINA NO ENCONTRADA (Conserva la URL original en el navegador)
    {
        path: '**',
        title: 'Página no encontrada - SAJI',
        loadComponent: () => import('./shared/pages/not-found-page/not-found-page'),
    },
];
