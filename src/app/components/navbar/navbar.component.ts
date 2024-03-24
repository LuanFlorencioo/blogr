import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { linkPages } from '@data/link-pages';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() isShowing?: boolean;
  currentMenuDropdown?: string;
  menus = linkPages;
  iconArrowUrl = '../../../assets/icon-arrow-dark.svg';

  triggerDropdown(menu: string): void {
    this.currentMenuDropdown =
      this.currentMenuDropdown === menu ? undefined : menu;
  }
}
