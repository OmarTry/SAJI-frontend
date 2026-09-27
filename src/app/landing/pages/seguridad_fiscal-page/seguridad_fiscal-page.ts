import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-seguridad-fiscal-page',
  imports: [],
  templateUrl: './seguridad_fiscal-page.html',
})
export default class SeguridadFiscalPage {
  // Estado reactivo para las pestañas del carrusel
  currentTab = signal<number>(0);

  // Estado reactivo para la barra interactiva de pre-auditoría
  auditProgress = signal<number>(100);
  auditStatus = signal<string>('Pre-Auditoría en Lote: 1,420 operaciones verificadas');
  auditPercentText = signal<string>('100% OK');
  isAuditing = signal<boolean>(false);

  switchTab(index: number): void {
    this.currentTab.set(index);
  }

  nextSlide(): void {
    this.currentTab.update((prev) => (prev + 1) % 4);
  }

  prevSlide(): void {
    this.currentTab.update((prev) => (prev - 1 + 4) % 4);
  }

  runFiscalAuditSimulation(): void {
    if (this.isAuditing()) return;

    this.isAuditing.set(true);
    this.auditProgress.set(0);
    this.auditPercentText.set('0%');
    this.auditStatus.set('Escaneando Providencia 0071, RIF y tasas BCV...');

    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      this.auditProgress.set(progress);
      this.auditPercentText.set(`${progress}%`);

      if (progress === 50) {
        this.auditStatus.set('Auditando cuadre Debe/Haber en Bimoneda...');
      } else if (progress === 75) {
        this.auditStatus.set('Verificando TXT de Retenciones IVA/ISLR...');
      } else if (progress >= 100) {
        clearInterval(interval);
        this.auditProgress.set(100);
        this.auditPercentText.set('100% OK');
        this.auditStatus.set('Pre-Auditoría en Lote: 1,420 operaciones verificadas');
        this.isAuditing.set(false);
      }
    }, 280);
  }
}
