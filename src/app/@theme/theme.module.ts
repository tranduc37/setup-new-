import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
const COMPONENTS = [
  // HeaderComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [CommonModule, ...COMPONENTS],
  declarations: [...COMPONENTS],

})
export class ThemeModule { }
