import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-presentation',
  imports: [Sidebar, Footer],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css',
})
export class Presentation {}