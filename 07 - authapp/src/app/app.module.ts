import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

//Importando Auth
import { AuthModule } from '@auth0/auth0-angular';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev--lbahk2u.us.auth0.com',
      clientId: 'NeyMJZ1u0wy6xmTaWogmEafVn7cHn5Bp'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
