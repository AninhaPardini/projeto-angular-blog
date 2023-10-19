import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DesignComponent } from './pages/design/design.component';
import { DevelopmentComponent } from './pages/development/development.component';
import { ProductManagerComponent } from './pages/product-manager/product-manager.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: 'design',
    component: DesignComponent,
  },
  {
    path: 'development',
    component: DevelopmentComponent,
  },
  {
    path: 'product',
    component: ProductManagerComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
