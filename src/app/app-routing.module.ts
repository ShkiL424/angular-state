import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: async () =>
      (await import('./pages/users/users.module')).UsersModule,
  },
  {
    path: 'posts',
    loadChildren: async () =>
      (await import('./pages/posts/posts.module')).PostsModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
