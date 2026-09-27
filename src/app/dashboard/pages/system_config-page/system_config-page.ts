import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-system-config-page',
  imports: [],
  templateUrl: './system_config-page.html',
})
export default class SystemConfigPage {
  readonly activeSection = signal<string>('bimoneda');

  scrollTo(sectionId: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.activeSection.set(sectionId);

    const element = document.getElementById(sectionId);
    if (!element) return;

    // Altura del navbar sticky (64px) + espacio de respiro visual (24px) = 88px
    const navbarOffset = 88;

    // Posición absoluta calculada respecto al scroll actual de la ventana
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
