import { Routes } from '@angular/router';
import { AuthLayout } from '@shared/layouts/auth-layout/auth-layout';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '',
        redirectTo: 'iniciar-sesion',
        pathMatch: 'full',
      },
      {
        path: 'iniciar-sesion',
        title: 'Iniciar Sesión | SAJI',
        loadComponent: () =>
          import('./pages/login-page/login-page')
      },
      {
        path: 'registrarse',
        title: 'Crear Cuenta | SAJI',
        loadComponent: () =>
          import('./pages/register-page/register-page')
      },
      {
        path: 'recuperar-contrasena',
        title: 'Recuperar Contraseña | SAJI',
        loadComponent: () =>
          import('./pages/forgot_password-page/forgot_password-page')
      },
      {
        path: 'restablecer-contrasena',
        title: 'Restablecer Contraseña | SAJI',
        loadComponent: () =>
          import('./pages/reset_password-page/reset_password-page')
      },
    ],
  },
];