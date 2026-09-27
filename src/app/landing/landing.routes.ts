import { Routes } from "@angular/router";

export const landingRoutes: Routes = [
  {
    path: '',
    title: 'SAJI ERP | Precisión Fiscal y Contable en Venezuela',
    loadComponent: () =>
      import('./pages/home-page/home-page'),
  },
  {
    path: 'soluciones',
    title: 'Soluciones | SAJI',
    loadComponent: () =>
      import('./pages/solutions-page/solutions-page'),
  },
  {
    path: 'bimoneda',
    title: 'Tasa Oficial BCV e Impacto Fiscal | SAJI',
    loadComponent: () =>
      import('./pages/bimoneda-page/bimoneda-page'),
  },
  {
    path: 'precios',
    title: 'Planes y Precios Corporativos | SAJI',
    loadComponent: () =>
      import('./pages/pricing-page/pricing-page'),
  },
  {
    path: 'firmas-contables',
    title: 'Plataforma para Despachos y Auditores | SAJI',
    loadComponent: () =>
      import('./pages/firmas-contables/firmas-contables'),
  },
  {
    path: 'seguridad-fiscal',
    title: 'Seguridad Fiscal | SAJI',
    loadComponent: () =>
      import('./pages/seguridad_fiscal-page/seguridad_fiscal-page'),
  },
];