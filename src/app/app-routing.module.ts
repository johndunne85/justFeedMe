import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
   { path: '', redirectTo: '/list', pathMatch: 'full'},
   { path: 'list', component: ListComponent },
   { path: 'details/:id', component: DetailsComponent },
   { path: 'checkout', component: CheckoutComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
