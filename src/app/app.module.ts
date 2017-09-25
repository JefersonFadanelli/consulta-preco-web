import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BotaoPrincipalComponent } from './botao-principal/botao-principal.component';
import { InputPrincipalComponent } from './input-principal/input-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoPrincipalComponent,
    InputPrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
