import { Routes } from '@angular/router';

export const purchasesRoutes: Routes = [
  // 1. Resumen principal, KPIs y lista de compras/gastos (URL: /app/compras)
  {
    path: '',
    title: 'Compras & Gastos | SAJI',
    loadComponent: () =>
      import('./pages/compras-page/compras-page')
  },

//   // 2. Registro y detalle de factura de proveedor
//   {
//     path: 'nueva', // URL: /app/compras/nueva
//     title: 'Registrar Factura de Proveedor | SAJI',
//     loadComponent: () =>
//       import('./pages/purchase-form/purchase-form.component').then(
//         (m) => m.PurchaseFormComponent
//       ),
//   },
//   {
//     path: ':id', // URL: /app/compras/:id
//     title: 'Detalle de Compra / Gasto | SAJI',
//     loadComponent: () =>
//       import('./pages/purchase-detail/purchase-detail.component').then(
//         (m) => m.PurchaseDetailComponent
//       ),
//   },

//   // 3. Notas de Ajuste de Proveedores (Crédito y Débito)
//   {
//     path: 'notas-ajuste', // URL: /app/compras/notas-ajuste
//     title: 'Notas de Proveedores | SAJI',
//     loadComponent: () =>
//       import('./pages/vendor-notes/vendor-notes.component').then(
//         (m) => m.VendorNotesComponent
//       ),
//   },

//   // 4. Órdenes de Compra (Procurement sin impacto fiscal inmediato)
//   {
//     path: 'ordenes', // URL: /app/compras/ordenes
//     title: 'Órdenes de Compra | SAJI',
//     loadComponent: () =>
//       import('./pages/purchase-orders/purchase-orders.component').then(
//         (m) => m.PurchaseOrdersComponent
//       ),
//   },
//   {
//     path: 'ordenes/nueva', // URL: /app/compras/ordenes/nueva
//     title: 'Emitir Orden de Compra | SAJI',
//     loadComponent: () =>
//       import('./pages/purchase-order-form/purchase-order-form.component').then(
//         (m) => m.PurchaseOrderFormComponent
//       ),
//   },

//   // 5. Libro de Compras SENIAT (Providencia 0071 / Crédito Fiscal)
//   {
//     path: 'libro-compras', // URL: /app/compras/libro-compras
//     title: 'Libro de Compras SENIAT | SAJI',
//     loadComponent: () =>
//       import('./pages/purchases-book/purchases-book.component').then(
//         (m) => m.PurchasesBookComponent
//       ),
//   },

//   // 6. Cuentas por Pagar (CxP Bimoneda) y Pagos a Proveedores
//   {
//     path: 'pagos', // URL: /app/compras/pagos
//     title: 'Pagos y Cuentas por Pagar (CxP) | SAJI',
//     loadComponent: () =>
//       import('./pages/payables/payables.component').then(
//         (m) => m.PayablesComponent
//       ),
//   },

//   // 7. Directorio de Proveedores & RIF
//   {
//     path: 'proveedores', // URL: /app/compras/proveedores
//     title: 'Directorio de Proveedores | SAJI',
//     loadComponent: () =>
//       import('./pages/suppliers-list/suppliers-list.component').then(
//         (m) => m.SuppliersListComponent
//       ),
//   },
];