import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DesignComponent } from './components/design/design.component';
import { ProductionComponent } from './components/production/production.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { DeliveredComponent } from './components/delivered/delivered.component';
import { CancelledComponent } from './components/cancelled/cancelled.component';
import { QaComponent } from './components/qa/qa.component';
import { OrdersComponent } from './components/orders/orders.component';
import { authGuard } from './Auth/auth.guard';
import { CreateOrUpdateCustomerComponent } from './components/customers/create-or-update-customer/create-or-update-customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details/order-details.component';
import { CreateNewOrderComponent } from './components/create-new-order/create-new-order.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'design', component: DesignComponent },
    { path: 'production', component: ProductionComponent },
    { path: 'shipping', component: ShippingComponent },
    { path: 'cancelled', component: CancelledComponent },
    { path: 'delivered', component: DeliveredComponent },
    { path: 'qa', component: QaComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'orderdetails', component: OrderDetailsComponent },
    { path: 'CustomerInfo', component: CreateOrUpdateCustomerComponent },
    { path: 'Customers', component: CustomersComponent },
    { path: 'create-new-order', component: CreateNewOrderComponent },

    // { path: 'home', component: HomeComponent, canActivate:[authGuard] },
    // { path: 'design', component: DesignComponent, canActivate:[authGuard]},
    // { path: 'production', component: ProductionComponent, canActivate:[authGuard]},
    // { path: 'shipping', component: ShippingComponent, canActivate:[authGuard]},
    // { path: 'cancelled', component: CancelledComponent, canActivate:[authGuard]},
    // { path: 'delivered', component: DeliveredComponent, canActivate:[authGuard]},
    // { path: 'qa', component: QaComponent, canActivate:[authGuard]},
    // { path: 'orders', component: OrdersComponent, canActivate:[authGuard]},
    // { path: 'orderdetails', component: OrderDetailsComponent},
    // { path: 'CustomerInfo', component: CreateOrUpdateCustomerComponent},
    // { path: 'Customers', component: CustomersComponent, canActivate:[authGuard]},

];
