// src/app/billing/billing.routes.ts
import { Routes } from '@angular/router';

export const billingRoutes: Routes = [
  // 1. Resumen principal, KPIs y lista (URL: /app/ventas)
  {
    path: '',
    title: 'Facturación & Ventas | SAJI',
    loadComponent: () =>
      import('./pages/facturacion-page/facturacion-page')
  },

//   // 2. Emisión y detalle
//   {
//     path: 'nueva', // URL: /app/ventas/nueva
//     title: 'Emitir Factura Fiscal | SAJI',
//     loadComponent: () =>
//       import('./pages/invoice-form/invoice-form.component').then(
//         (m) => m.InvoiceFormComponent
//       ),
//   },
//   {
//     path: ':id', // URL: /app/ventas/:id
//     title: 'Detalle de Factura | SAJI',
//     loadComponent: () =>
//       import('./pages/invoice-detail/invoice-detail.component').then(
//         (m) => m.InvoiceDetailComponent
//       ),
//   },

//   // 3. Operaciones complementarias
//   {
//     path: 'notas-ajuste', // URL: /app/ventas/notas-ajuste
//     title: 'Notas de Crédito y Débito | SAJI',
//     loadComponent: () =>
//       import('./pages/credit-debit-notes/credit-debit-notes.component').then(
//         (m) => m.CreditDebitNotesComponent
//       ),
//   },
//   {
//     path: 'cotizaciones', // URL: /app/ventas/cotizaciones
//     title: 'Presupuestos y Cotizaciones | SAJI',
//     loadComponent: () =>
//       import('./pages/quotes-list/quotes-list.component').then(
//         (m) => m.QuotesListComponent
//       ),
//   },
//   {
//     path: 'libro-ventas', // URL: /app/ventas/libro-ventas
//     title: 'Libro de Ventas SENIAT | SAJI',
//     loadComponent: () =>
//       import('./pages/sales-book/sales-book.component').then(
//         (m) => m.SalesBookComponent
//       ),
//   },
//   {
//     path: 'cobros', // URL: /app/ventas/cobros
//     title: 'Cuentas por Cobrar & IGTF | SAJI',
//     loadComponent: () =>
//       import('./pages/receivables/receivables.component').then(
//         (m) => m.ReceivablesComponent
//       ),
//   },
//   {
//     path: 'clientes', // URL: /app/ventas/clientes
//     title: 'Directorio de Clientes | SAJI',
//     loadComponent: () =>
//       import('./pages/customers-list/customers-list.component').then(
//         (m) => m.CustomersListComponent
//       ),
//   },
];