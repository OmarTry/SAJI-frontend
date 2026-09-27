import { Routes } from "@angular/router";

export const supportRoutes: Routes = [
    {
        path: '',
        title: 'Centro de Ayuda y Soporte Técnico | SAJI',
        loadComponent: () =>
        import('./pages/help_center-page/help_center-page')
    },
    // Subrutas preparadas para el crecimiento de la base de conocimiento
    /*
    {
        path: 'categoria/:slug',
        title: 'Categoría de Ayuda | SAJI',
        loadComponent: () =>
        import('./pages/category-page/category-page').then(
            (m) => m.CategoryPageComponent
        ),
    },
    {
        path: 'articulo/:slug',
        title: 'Artículo de Ayuda | SAJI',
        loadComponent: () =>
        import('./pages/article-page/article-page').then(
            (m) => m.ArticlePageComponent
        ),
    },
    */
]