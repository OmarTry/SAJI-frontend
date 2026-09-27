import { Component } from '@angular/core';
import { ThemeToggle } from '@shared/components/theme-toggle/theme-toggle';
import { RouterOutlet } from '@angular/router';
import { DashboardSidebar } from '@shared/components/dashboard-sidebar/dashboard-sidebar';

@Component({
  selector: 'app-dashboard-layout',
  imports: [ThemeToggle, RouterOutlet, DashboardSidebar],
  templateUrl: './dashboard-layout.html',
})
export class DashboardLayout {}
