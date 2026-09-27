import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FaqItem {
  id: number;
  badge: string;
  badgeClass: string;
  readTime: string;
  question: string;
  paragraph1: string;
  steps?: string[];
  paragraph2?: string;
}

@Component({
  selector: 'app-help-center-page',
  imports: [FormsModule],
  templateUrl: './help_center-page.html',
})
export default class HelpCenterPage {
  searchQuery = signal<string>('');
  openFaqId = signal<number | null>(1); // El primer acordeón abierto por defecto

  faqs: FaqItem[] = [
    {
      id: 1,
      badge: 'Guía',
      badgeClass: 'bg-primary/10 text-primary',
      readTime: '3 min',
      question: 'Cómo conciliar operaciones en dólares recibidas vía Zelle o transferencias con IGTF',
      paragraph1: 'En SAJI, el módulo bimoneda desglosa automáticamente la percepción del 3% correspondiente al IGTF sobre pagos en divisas o cuentas custodia no vinculadas al débito interbancario en bolívares.',
      steps: [
        'Dirígete a Facturación y Ventas > Cobros Duales.',
        'Selecciona la factura emitida y define la cuenta destino "Divisas en Custodia / Efectivo".',
        'Verifica la tasa oficial BCV a la fecha del cobro y confirma la percepción automática del 3%.'
      ]
    },
    {
      id: 2,
      badge: 'Tutorial',
      badgeClass: 'bg-slate-100 text-slate-700',
      readTime: '4 min',
      question: 'Pasos para generar y validar el archivo XML de retenciones de ISLR para el portal SENIAT',
      paragraph1: 'El generador de SAJI valida la estructura formal exigida para la declaración quincenal y mensual de retenciones sobre personas jurídicas y naturales.',
      paragraph2: 'Accede al módulo de Retenciones ISLR, pulsa "Validar Estructura Fiscal" y descarga el archivo .XML listo para su carga directa sin errores de formato.'
    },
    {
      id: 3,
      badge: 'Técnico',
      badgeClass: 'bg-emerald-50 text-emerald-700',
      readTime: '2 min',
      question: 'Sincronización horaria de la tasa de cambio oficial del Banco Central de Venezuela',
      paragraph1: 'El servicio automatizado de SAJI consulta las tablas ponderadas del BCV diariamente al cierre de las mesas de cambio (17:00 VET). Para facturas con fecha valor del día siguiente hábil, el sistema aplica la tasa de curso legal correspondiente.'
    },
    {
      id: 4,
      badge: 'Avanzado',
      badgeClass: 'bg-primary/10 text-primary',
      readTime: '5 min',
      question: 'Reapertura y cierre de periodos contables sin desfasar el diferencial cambiario NIC 21',
      paragraph1: 'Aprende la metodología de ajuste cambiario no consumado para cuentas por cobrar y pasivos en moneda extranjera, asegurando que los asientos de reversión automática preserven la exactitud del ejercicio fiscal anterior.'
    },
    {
      id: 5,
      badge: 'Gestión',
      badgeClass: 'bg-slate-100 text-slate-700',
      readTime: '3 min',
      question: 'Añadir nuevos usuarios con perfil restringido para clientes de tu firma contable',
      paragraph1: 'Configura accesos de "Solo Consulta" o "Carga de Comprobantes" asignados específicamente a un RIF individual dentro de tu cartera multicliente sin otorgar visibilidad sobre otras razones sociales.'
    },
    {
      id: 6,
      badge: 'Solución Rápida',
      badgeClass: 'bg-emerald-50 text-emerald-700',
      readTime: '2 min',
      question: 'Solución ante errores comunes de consistencia en el correlativo fiscal de facturas',
      paragraph1: 'Instrucciones para auditar y reparar saltos de numeración causados por intermitencias de energía en impresoras fiscales o desconexión en lotes de facturación digital autorizada.'
    }
  ];

  toggleFaq(id: number): void {
    this.openFaqId.update((current) => (current === id ? null : id));
  }

  setSearchTerm(term: string): void {
    this.searchQuery.set(term);
  }
}
