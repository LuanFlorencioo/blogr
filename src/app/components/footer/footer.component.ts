import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { linkPages } from '@data/link-pages';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, TitleCasePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  logoImgUrl = '/assets/logo.svg';
  linkPages = linkPages;
}
