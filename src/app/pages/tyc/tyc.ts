import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-tyc',
  imports: [Sidebar, Footer],
  templateUrl: './tyc.html',
  styleUrl: './tyc.css',
})
export class Tyc {}
