import { Routes } from "@angular/router";
import { DashboardLayout } from "@shared/layouts/dashboard-layout/dashboard-layout";

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardLayout,
    children: [
      {
        path: '',
        redirectTo: 'resumen',
        pathMatch: 'full',
      },
      {
        path: 'resumen',
        title: 'Panel Fiscal | SAJI',
        loadComponent: () =>
          import('./pages/resumen-page/resumen-page')
      },
      {
        path: 'ventas',
        title: 'Facturación y Libros Fiscales | SAJI',
        loadChildren: () =>
          import('../billing/billing.routes').then((m) => m.billingRoutes),
      },
      {
        path: 'compras', // antes: purchases
        title: 'Compras & Gastos | SAJI',
        loadChildren: () =>
          import('../purchases/purchases.routes').then((m) => m.purchasesRoutes),
      },
      {
        path: 'contabilidad', // antes: accounting
        title: 'Contabilidad Legal & Libros | SAJI',
        loadChildren: () =>
          import('../accounting/accounting.routes').then((m) => m.accountingRoutes),
      },
      {
        path: 'tributos', // antes: tax-engine
        title: 'Retenciones & SENIAT | SAJI',
        loadChildren: () =>
          import('../tax-engine/tax-engine.routes').then((m) => m.taxEngineRoutes),
      },
      {
        path: 'empresa', // antes: company
        title: 'Configuración de Empresa & RIF | SAJI',
        loadChildren: () =>
          import('../company/company.routes').then((m) => m.companyRoutes),
      },
      {
        path: 'auditoria',
        title: 'Bitácora de Auditoría | SAJI',
        loadComponent: () =>
          import('./pages/auditoria-page/auditoria-page'),
      },
      {
        path: 'configuracion-sistema',
        title: 'Configuración del Sistema | SAJI',
        loadComponent: () =>
          import('./pages/system_config-page/system_config-page'),
      },
    ],
  },
];