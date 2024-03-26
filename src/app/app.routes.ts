import { Routes } from '@angular/router';
import { HomePage } from '@pages/home';
import { NotFoundPage } from '@pages/not-found-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: '**', component: NotFoundPage },
];
