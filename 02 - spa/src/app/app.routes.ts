import { compileNgModuleFromRender2 } from "@angular/compiler/src/render3/r3_module_compiler";
import { Component } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'hero/:id', component: HeroComponent},
    {path: 'buscar/:termino', component: BuscadorComponent},
    {path: '**',pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);