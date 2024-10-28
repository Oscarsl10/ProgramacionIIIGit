import { Routes } from '@angular/router';
import { AdidasComponent } from './adidas/adidas.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NikeComponent } from './nike/nike.component';
import { PumaComponent } from './puma/puma.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'adidas', component: AdidasComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'nike', component: NikeComponent},
    {path: 'puma', component: PumaComponent},
    {path: 'home', component: HomeComponent}

];
