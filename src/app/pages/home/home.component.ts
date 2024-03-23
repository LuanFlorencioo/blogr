import { Component } from '@angular/core';
import { HomeHeaderComponent } from '@components/home-header';
import { HomeIntroComponent } from '@components/home-intro';
import { HomeMainComponent } from '@components/home-main';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [HomeHeaderComponent, HomeIntroComponent, HomeMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePage {}
