import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    // 1. ZONA PÚBLICA ESTÁTICA (SSG / Prerender: SEO)
    {
        path: '',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'soluciones',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'bimoneda',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'precios',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'firmas-contables',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'seguridad-fiscal',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'policy',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'soporte',
        renderMode: RenderMode.Prerender,
    },

    // 2. ACCESO Y SEGURIDAD (SSR Dinámico bajo demanda)
    // Cubre /auth, /auth/login, /auth/register, /auth/recuperar, etc.
    {
        path: 'auth/**',
        renderMode: RenderMode.Server,
    },

    // 3. PLATAFORMA PRIVADA ERP (Client o Server)
    // Cubre /app, /app/dashboard, /app/libros-fiscales, /app/retenciones, etc.
    {
        path: 'app',
        renderMode: RenderMode.Client, // o RenderMode.Server (ver detalle abajo)
    },

    // 4. CATCH-ALL: Página no encontrada y rutas no contempladas
    {
        path: '**',
        renderMode: RenderMode.Server,
    },
];