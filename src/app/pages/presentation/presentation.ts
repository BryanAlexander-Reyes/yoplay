import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';

@Component({
  selector: 'app-presentation',
  imports: [Sidebar],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css',
})
export class Presentation {}