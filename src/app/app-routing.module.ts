import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'note',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationPageModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationPageModule),
  },
  {
    path: 'reset',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationPageModule),
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then((m) => m.NotePageModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'note/:noteId',
    loadChildren: () => import('./note/note.module').then((m) => m.NotePageModule),
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
