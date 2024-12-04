import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { AllCustomerComponent } from './pages/all-customer/all-customer.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';

export const routes: Routes = [
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"view-all",
        component:AllCustomerComponent
    },
    {
        path:"profile",
        component:CustomerProfileComponent
    }


];
