import { isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, RendererFactory2, Service, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(RendererFactory2).createRenderer(null, null);

  // Estado reactivo global
  readonly currentTheme = signal<ThemeMode>('light');

  constructor() {
    // Solo ejecutamos lógica de navegador si no estamos en el servidor (SSR-safe)
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('saji-theme') as ThemeMode | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme: ThemeMode = savedTheme ?? (prefersDark ? 'dark' : 'light');
      this.currentTheme.set(initialTheme);

      // Efecto que reacciona a los cambios de la Signal
      effect(() => {
        const theme = this.currentTheme();
        const htmlElement = document.documentElement;

        if (theme === 'dark') {
          this.renderer.addClass(htmlElement, 'dark');
        } else {
          this.renderer.removeClass(htmlElement, 'dark');
        }

        localStorage.setItem('saji-theme', theme);
      });
    }
  }

  toggleTheme(): void {
    this.currentTheme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);
  }
}
