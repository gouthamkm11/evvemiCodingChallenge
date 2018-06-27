import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Root Component
import { AppComponent } from './app.component';
//Generated Components
import { InputComponentComponent } from './grid-generator/input-component/input-component.component';
import { GridGeneratorComponent } from './grid-generator/grid-generator.component';
//Directives
import { ClickMeDirective } from './directive/click-me.directive';


@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    GridGeneratorComponent,
    ClickMeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
