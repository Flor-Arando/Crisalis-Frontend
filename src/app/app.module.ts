import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { interceptorProvider } from './service/interceptor-service';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonComponent } from './components/person/person.component';
import { CompanyComponent } from './components/company/company.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { EditCompanyComponent } from './components/company/edit-company/edit-company.component';
import { NewCompanyComponent } from './components/company/new-company/new-company.component';
import { NewProductComponent } from './components/product/new-product/new-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { EditServicioComponent } from './servicio/edit-servicio/edit-servicio.component';
import { EditServiciosComponent } from './components/servicio/edit-servicios/edit-servicios.component';
import { NewServicioComponent } from './components/servicio/new-servicio/new-servicio.component';
import { NewOrderComponent } from './components/order/new-order/new-order.component';
import { StateComponent } from './components/state/state.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, //declaramos los componentes para el routing
    UserComponent, 
    HomeComponent, 
    MenuComponent, 
    FooterComponent, 
    PersonComponent, 
    CompanyComponent, 
    ServicioComponent,
    ProductComponent, 
    OrderComponent,
    AddPersonComponent,
    EditPersonComponent,
    EditCompanyComponent,
    NewCompanyComponent,
    NewProductComponent,
    NewOrderComponent,
    EditProductComponent,
    EditServicioComponent,
    EditServiciosComponent,
    NewServicioComponent,
    StateComponent,
    EditOrderComponent,
    OrderDetailComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,//.forRoot({}), creamos una constante dentro un array de rutas, declaramos, e importamos routermodule y con forRoot le decimos donde estan las rutas
    HttpClientModule,
    FormsModule
    
  
  ],
  providers: [

    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
