import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchProductComponent } from './search-product/search-product.component';

export const routes: Routes = [

  { path: 'search', component: SearchProductComponent },
  { path: 'list', component: ProductListComponent }
  
];