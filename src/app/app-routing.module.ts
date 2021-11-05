import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'folder/login',
        pathMatch: 'full'
    },
    {
        path: 'folder/login',
        loadChildren: () => import('./folder/login/login.module').then( m => m.LoginPageModule)
    },
    {
        path: 'comic-detail',
        loadChildren: () => import('./folder/comics-detail/comics-detail.module').then(m => m.ComicsDetailPageModule)
    },
    {
        path: 'homepage',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],

    exports: [RouterModule]
})

export class AppRoutingModule {}
