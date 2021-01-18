import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { CuisineSearchComponent } from './cuisine-search/cuisine-search.component';
import { YourOrderComponent } from './your-order/your-order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PurchaseComponent } from './purchase/purchase.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    SearchComponent,
    CuisineSearchComponent,
    YourOrderComponent,
    CheckoutComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
