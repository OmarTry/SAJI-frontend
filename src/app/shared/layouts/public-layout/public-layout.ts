import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicFooter } from '../../components/public-footer/public-footer';
import { PublicNavbar } from '../../components/public-navbar/public-navbar';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, PublicNavbar, PublicFooter],
  templateUrl: './public-layout.html',
})
export class PublicLayout {}
