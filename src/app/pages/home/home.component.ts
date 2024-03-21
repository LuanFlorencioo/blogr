import { Component } from '@angular/core';
import { HomeHeaderComponent } from '@components/home-header';
import { HomeIntroComponent } from '@components/home-intro';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [HomeHeaderComponent, HomeIntroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePage {}
