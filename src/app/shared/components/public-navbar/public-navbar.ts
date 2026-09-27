import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'public-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './public-navbar.html',
})
export class PublicNavbar {
  // Estado para abrir/cerrar el menú en teléfonos
  isMobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
