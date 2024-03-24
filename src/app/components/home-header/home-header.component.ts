import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '@components/navbar';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [NgOptimizedImage, NavbarComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {
  isShowNavbar = false;

  triggerShowNavbar(): void {
    this.isShowNavbar = !this.isShowNavbar;
  }
}
